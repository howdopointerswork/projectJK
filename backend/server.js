require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const ex = express();

const port = 3000;


ex.listen(port, () => {
	console.log("Listening...");

});
