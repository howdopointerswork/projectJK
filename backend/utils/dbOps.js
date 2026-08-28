import "dotenv/config";


console.log(process.env.DATABASE_URL);

const fs = require("fs");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const path = require('path');
const cors = require('cors');
const Parser = require("rss-parser");
const axios = require("axios");
const bcrypt = require("bcrypt");


const ex  = express();
const port = 3000;
const frontendDistPath = path.join(__dirname, "../frontend/dist");
var id = 0;
const popular = ["AAPL", "MSFT", "NVDA", "AMZN", "TSLA", "GOOGL"];
const sources = [

"https://www.cnbc.com/id/15839135/device/rss/rss.html",
"https://feeds.content.dowjones.io/public/rss/mw_topstories",
"https://www.cnbc.com/id/15839069/device/rss/rss.html",
"https://feeds.content.dowjones.io/public/rss/mw_topstories",
"http://rss.cnn.com/rss/money_latest.rss",
"https://feeds.bbci.co.uk/news/business/rss.xml",

//"https://www.nasdaq.com/feed/rssoutbound?category=Markets"
];
	
const cache = {};
let marketCache = null;
let newsCache = null;
let lastUpdated = null;
let lastUpdatedNews = null;
const CACHE_TIME = 7*60*1000;
const parser = new Parser();

ex.use(cors());

ex.use(express.static(__dirname));
if (fs.existsSync(frontendDistPath)) {
	ex.use(express.static(frontendDistPath));
}
ex.use(express.json());




ex.post('/login', async (req, res) => {

	const { username, pw } = req.body;
	 
	const hash = await bcrypt.hash(req.body.pw, 10);

	try{

		const user = await prisma.user.findUnique({
			where: { username: req.body.username }
		});
	
		if(!user){
			console.log("user not found");
			return;
			
		}else{
			console.log("found");
			const valid = await bcrypt.compare(req.body.pw, user.password);
			if(!valid){
				console.log("invalid credentials");
				return res.json({ success: false,
					user });
			}else{
				console.log("success!");
				console.log(user.id);
				id = user.id; 
				console.log("ID: " + id);
				
				return res.json({ success: true,
					user });
					
			}
		}

	

	}catch(e){
		console.error(e);
		res.status(500).json({ e: 'Error getting data' });
	}




});


ex.post("/user", async (req, res) => {

	console.log("DB OPS: Username");
	const { username, password, email, age } = req.body;

	try{
		
		const user = await prisma.user.create({

		data: { username, password, email, age }
		});
		
		console.log("Added user:", user.id);

		return res.status(201).json(user);
				
	

	}catch(err){
		console.error("Could not create user");
		res.status(500).json( {error: err.message } );
	}

	
});

ex.put("/transaction/:id", async (req, res) => {


	const { id, amount, category, type, description, userId } = req.body;

	try{
		const transaction = await prisma.transaction.update({
			where: {
				id: id,
				userId: userId
			},
			data: {
				amount: Number(amount),
				category,
				type,
				description
			}
		});

		res.json();

		
	}catch(error){
		console.error(error);
	}

});


ex.put("/target/:id", async (req, res) => {

	try{
		const user = await prisma.user.update({
			where: {
				id: Number(req.params.id)
			},
			data: {
				target: Number(req.body.target)
			}
		});

		res.json(user);

	}catch(err){
		console.error(err);
		res.status(500).json({error: err.message});
	}


});

ex.delete("/share/:id", async (req, res) => {
	const {id, userId} = req.body;

	try{

		const share = await prisma.stock.findFirst({
			where: {
				id: id,
				userId: userId
			}
		});

		if(!share){

			console.log("Failed to delete stock");
		}else{

			console.log("Deleted stock successfully");

			await prisma.stock.delete({
				where: {
					id: id
				}
			});

			res.json()
		}


	}catch(err){
		console.error(err);
		res.status(500).json({error: err.message});

	}

});


ex.delete("/transaction/:id", async (req, res) => {

	const {id, userId} = req.body;

	try{

		const transaction = await prisma.transaction.findFirst({

			where: {
				id: id,
				userId: userId
			}
		});
		if(!transaction){

			console.log("Failed to delete transaction");
		}else{

			console.log("Successfully deleted");
		
		

		await prisma.transaction.delete({
			where: {
				id: id
			}
		});

			res.json()

		}

	}catch(error){

		console.error(error);
	}

});


ex.get("/target/:id", async (req, res) => {


	try{
		
		const user = await prisma.user.findUnique({
			where: {
				id: Number(req.params.id)
			},
			select: {
				target: true
			}
		});

		if(!user){
			console.log("Could not find user");
			return res.status(404).json({error: "User not found"})
		}
		console.log("USER:",user);
		res.json(user);


	}catch(err){
		console.error(error);
		res.status(500).json({ error: err.message })
	}

});

ex.get("/markets", async (req, res) => {

	if(marketCache && Date.now() - lastUpdated < CACHE_TIME){
		console.log("Using market cache");
		return res.json(marketCache);
	}

	// Fallback data keeps the UI usable if the market API is down or rate-limited.
	const fallbackMarkets = [
		{ name: "S&P 500", symbol: "SPY", price: "--", change: "--" },
		{ name: "NASDAQ", symbol: "QQQ", price: "--", change: "--" },
		{ name: "Dow Jones", symbol: "DIA", price: "--", change: "--" },
		{ name: "Russell 2000", symbol: "IWM", price: "--", change: "--" },
		{ name: "Gold", symbol: "GLD", price: "--", change: "--" },
		{ name: "Silver", symbol: "SLV", price: "--", change: "--" },
		{ name: "US Oil Fund", symbol: "USO", price: "--", change: "--" }
	];

	const symbols = fallbackMarkets.map(({ name, symbol }) => ({ name, symbol }));

	try{
		// Pull the latest quote for each symbol from Finnhub.
		const markets = await Promise.all(
			symbols.map(async market => {
				const resp = await axios.get("https://finnhub.io/api/v1/quote", {
					params: {
						symbol: market.symbol,
						token: process.env.FINNHUB_API_KEY
					}
				});

				return {
					name: market.name,
					symbol: market.symbol,
					price: resp.data.c,
					change: resp.data.dp
				};
			})
		);

	//	console.log("Server side:",markets);
		if(marketCache){
			console.log("API fetch failed. Using cache...");
			return res.json(marketCache);
			
		}


		// Save the successful response so it can be reused for a short time.

		marketCache = markets;
		lastUpdated = Date.now();
		return res.json(markets);
	}catch(err){
		console.error(err);

		// If the live API fails, return the last good cache or the static fallback.
		if(marketCache){
			console.log("Using market cache...");
			return res.json(marketCache);
		}

		return res.json(fallbackMarkets);
	}

});


ex.get('/rss', async (req, res) => {
	
	const url = req.query.url;

	try{
		const feed = await parser.parseURL(url);
		res.json(feed.items);

	}catch(err){

		console.error(err);
		res.status(500).json({ error: err.message });
	}



});

ex.get('/news', async (req, res) => {

	let articles = [];

	if(newsCache && Date.now() - lastUpdatedNews < CACHE_TIME){
		console.log("Using market cache");
		return res.json(newsCache);
	}

	try{

		for (const source of sources){
		
			const feed = await parser.parseURL(source);
		
			articles.push(...feed.items.map(item => ({

				title: item.title,
				link: item.link,	
				date: item.pubDate,
				desc: item.content
			}))
			);
		}

		articles = articles.slice(0,10);

		newsCache = articles;
		lastUpdatedNews = Date.now();

		res.json(articles);
	}catch(err){
		console.error(err);
		if(newsCache){
			console.log("Using news cache...");
			return res.json(newsCache);
		}
		res.status(500).json({ error: err.message });
	}
});

function getImg(item){

	if(item.enclosure?.url){
		return item.enclosure.url;
	}

	if(item["media:content"]?.$?.url){
		return item["media:content"].$.url;
	}

	if(item.content){

		const embed = item.content.match(/<img[^>]+src="([^"]+)"/i);

		if(embed){
			return embed[1];	
		}
	}

	if(item.contentSnippet){

		const embed = item.contentSnippet.match(/<img[^>]+src="([^"]+)"/i);

		if(embed){
			return embed[1];	
		}
	}
		return "dummy.png";


	
}


ex.get('/User/:username', async (req, res) => {
	
	const { username } = req.params;


	try{
		const user = await prisma.user.findFirst({

			where: { username: username }
			
		});
		return res.json(user);

	}catch(error){
		console.error(error);
		res.status(500).json({ error: 'Error getting data' });
	}

});


ex.get('/transaction/count/:userId', async (req, res) => {

	const id = Number(req.params.userId);



	const count = await prisma.transaction.count({

		where: {
			userId: id
		}
	});

	res.json({

		count: count
	});

});

ex.post('/share', async (req, res) => {
	
	const { price, shares, symbol } = req.body;

	try{
		const stock = await prisma.stock.create({
			data: {
				
				price: parseFloat(price),
				shares: Number(shares),
				symbol: symbol,
				user: {connect: {id: id }}
			}
		});

		res.json(stock);
			

	}catch(err){

		console.error(err);
		res.status(500).json( {error: err.message });
	}

});


ex.post('/transaction', async (req, res) => {


	const { amount, category, type, description } = req.body;
	

	try{

		const transaction = await prisma.transaction.create({
			data: {
				amount: parseFloat(amount),
				category: category,
				type: type,
				description: description,
				user: {
					connect: { id: id },
				},
			},
		});
		res.json(transaction);

}catch(error){
	console.error(error);	
	res.status(500).json({ error: 'Error getting data' });
}

});


ex.get("/transaction/:userId", async (req, res) => {

	const { userId } = req.params;

	console.log("Getting transactions for:",userId);
	
	const transactions = await prisma.transaction.findMany({

		where: { userId: Number(userId) },
	});
	console.log(transactions);
	return res.json(transactions);


});

ex.get("/share/:userId", async (req, res) => {

	const { userId } = req.params;

	const shares = await prisma.stock.findMany({


		where: { userId: Number(userId) },
	});

	res.json(shares);

});



ex.get('/stock/history/:symbol', async (req, res) => {

		console.log("fetching history...");

		const symbol = req.params.symbol.toUpperCase();

		if(cache[symbol]){
			console.log("Returning from cache:",symbol);
			return res.json(cache[symbol]);
		}

	

	try{

		const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

		const data = await resp.json();

		console.log(data);

		cache[symbol] = data;

		res.json(data);
		
		

		
	}catch(err){
		console.error(err);
		res.status(500).json({ err: "Failed to retrieve history"  });
	}

});


//for testing API
ex.get('/stock/:symbol', async (req, res) => {

	console.log("getting symbol...");
	
	try{
		const symbol = req.params.symbol.toUpperCase();

		const resp = await fetch(
			`http://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
		);

		const data = await resp.json();

		res.json(data);

		
	}catch(err){
		console.error(err);
	}

});


ex.get('/stock/profile/:symbol', async (req, res) => {

	try{
		const symbol = req.params.symbol.toUpperCase();

		const resp = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`);

		const data = await resp.json();

		res.json(data);

	}catch(err){
		console.error(err);
	}


});


ex.get('/stocks/popular', async (req, res) => {
	console.log("testing...");
	try{
		
		const stocks = [];


		for(const symbol of popular){

			const resp = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`);
			const data = await resp.json();
			
		//	console.log(symbol, data);

			stocks.push({

				symbol: symbol,
				price: data.c,
				change: data.d,
				percentChange: data.dp
			});
		}
	
		res.json(stocks);

	}catch(err){
		console.error(err);
	}

});





ex.post('/User', async (req, res) => {

	const { username, password } = req.body;

	try{

		const user = await prisma.user.create({

			data: { username, password }
		});
		res.status(201).json(user);

	}catch(e){
		console.error("Could not create user:", e);
		
	}

});

if (fs.existsSync(frontendDistPath)) {
	ex.get(/.*/, (req, res) => {
		res.sendFile(path.join(frontendDistPath, "index.html"));
	});
}

ex.listen(port, () => {

	console.log("Server is running");


});

