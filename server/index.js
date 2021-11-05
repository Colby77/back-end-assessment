const express = require("express");
const cors = require("cors");

const app = express();

const {getCompliment, getFortune} = require('./ctrl')

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)

app.listen(4000, () => console.log("Server running on 4000"));