import "dotenv/config";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendDistPath = path.join(__dirname, "../frontend/dist");
const ex = express();


import userRoutes from "./utils/userRoutes.js";


ex.use(cors());

if (fs.existsSync(frontendDistPath)) {
	ex.use(express.static(frontendDistPath));
}
ex.use(express.json());

ex.use('/user', userRoutes);

const port = 3000;

console.log("Testing...");
console.log("Finding route...");
//for testing connectivity / curl
ex.get("/", async (req, res) => {

	console.log("Hit!");
});


ex.post('/user/following/:id', async (req, res) => {

	const userID = req.params.id;
	const followingID = req.body.userID;

	console.log("Following route");

	const user = await prisma.user.findUnique({

		where: { id: Number(userID) }
	})

	if(!user || userID == followingID){
		console.log("Can't find user or identical IDs");
		return res.json({success: false});
	}

	const updatedFollowing = [...user.following, Number(followingID)];

	if(user.following.includes(Number(followingID))){
		console.log("Already in following");
		return res.json({success: false});
	}

	const updatedUser = await prisma.user.update({


		where: { id: Number(userID) },
		data: {
			following: updatedFollowing
		}
	});



});

ex.post('/user/followers/:id', async (req, res) => {
	
	const followedID = req.params.id;
	const userID = req.body.userID;

	console.log("Followers route");
	console.log("To follow: ",followedID);
	console.log("You are: ", userID);

	const user = await prisma.user.findUnique({

		where: { id: Number(followedID) }
	});

	if(!user || followedID == userID){
		console.log("Can't find user or identical ID");
		return res.json({success: false});
	}

	const updatedFollowers = [...user.followers, Number(userID)];

	if(user.followers.includes(Number(userID))){
		console.log("Already followed");
		return res.json({success: false});
	}

	const updatedUser = await prisma.user.update({


		where: { id: Number(followedID) },
		data: {
			followers: updatedFollowers
		}
	});

	res.json(updatedUser.followers);

});

ex.get('/user/:username', async (req, res) => {	

	const username = req.params.username;

	console.log("Username route");
	
	const user = await prisma.user.findUnique({
		
		where: { username: req.params.username }
	});

	if(!user){
		return res.json({success: false});
	}else{

		return res.json({success: true});
	}	
});


ex.get('/user/image/:id', async (req, res) => {

	const id = req.params.id;

	console.log("Route: getting path");

	const path = await prisma.user.findUnique({
		where: {
			id: Number(id)
		}

	});

	return res.json(path);
});


ex.get('/id/:id', async (req, res) => {

	const id = req.params.id;
	console.log("ID route");

	console.log("ID is:", id);

	const user = await prisma.user.findUnique({

		where: { id: Number(req.params.id) }
	});

	if(!user){
		return res.json({success: false, user});
	}else{

		return res.json({success: true, user});
	}	
	
});



ex.get("/users" ,async (req, res) => {
	
	const resp = await prisma.user.findMany();
	
	if(resp){

		return res.json(resp);	
	}
		
});

ex.put("/users/image/:id", async(req, res) => {
	console.log("image route");	
	const path = req.body.path;
	const id = req.params.id;

	const user = await prisma.user.findUnique({

		where: {

			id: Number(id)	
		},

	
	});

	if(user){

		console.log("found user");
		
		const updatedPath = await prisma.user.update({

			where: {id: Number(id)},
			data: { picturePath: path }
		});

		return res.json(updatedPath.picturePath);

	}	
});


ex.put("/users/unfollow/:id", async(req, res) => {

	console.log("Reached unfollow route");
	const userID = req.body.userID;
	const id = req.params.id;
	
	try{
		console.log("here",userID);
		const user = await prisma.user.findUnique({
			where: {
				id: Number(userID)
			}
		});
		console.log("Here2");
		if(user){

			const updatedFollowing = user.following.filter(val => val !== Number(id));
			const updatedUser = await prisma.user.update({

				where: { id: Number(userID) },
				data: {
				following: updatedFollowing
				}
			});
		

		

			console.log("updated first user");

			const user2 = await prisma.user.findUnique({

				where: {
					id: Number(id)
				}
			});

			if(user2){

				const updatedFollowers = user2.followers.filter(val => val !== Number(userID));
				const updatedUser2 = await prisma.user.update({

					where: { id: Number(id) },
					data: {
						followers: updatedFollowers
					}
				});
	
		
				console.log("updated second user");

				return res.json(updatedUser.following, updatedUser2.followers);


			}	
		}
			


	}catch(err){
		console.log("Problem unfollowing");
		res.status(500).json({error: err.message});
	}
});
//get all users here

if (fs.existsSync(frontendDistPath)) {
	ex.get(/.*/, (req, res) => {
		res.sendFile(path.join(frontendDistPath, "index.html"));
	});
}

ex.listen(port, () => {
	console.log("Listening...");

});
