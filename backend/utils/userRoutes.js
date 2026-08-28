import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = express.Router();



router.post("/", async (req, res) => {

	console.log("Using user routes");
	
	const { username, pw, email, dob } = req.body;

	try{
		//hash password!
		const hash = await bcrypt.hash(req.body.pw, 10);
		const user = await prisma.user.create({

			data: { 
			
				username: username,
				password: hash,
				email: email,
				dob: new Date(dob)
			

			}
		});
		
		console.log("Added user:", user.id);

		return res.status(201).json(user);
				
	

	}catch(err){
		console.error("Could not create user");
		res.status(500).json( {error: err.message } );
	}


});


router.post('/login', async (req, res) => {

	const { username, pw } = req.body;
	console.log("Hello!");

	try{

		const user = await prisma.user.findUnique({
			where: { username: req.body.username }
		});
	
		if(!user){
			console.log("not found, signing up...");
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

				return res.json({ success: true,
					user });
					
			}
		}

	

	}catch(e){
		console.error(e);
		res.status(500).json({ e: 'Error getting data' });
	}




});
export default router;
