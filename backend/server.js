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

//for testing connectivity / curl
ex.get("/", async (req, res) => {

	console.log("Hit!");
});

ex.get('/user/:username', async (req, res) => {	

	const username = req.params.username;
	
	const user = await prisma.user.findUnique({
		
		where: { username: req.params.username }
	});

	if(!user){
		return res.json({exists: false});
	}
	return res.json({exists: true});
});

if (fs.existsSync(frontendDistPath)) {
	ex.get(/.*/, (req, res) => {
		res.sendFile(path.join(frontendDistPath, "index.html"));
	});
}

ex.listen(port, () => {
	console.log("Listening...");

});
