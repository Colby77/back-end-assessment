const express = require("express");
const cors = require("cors");

const app = express();

const {getCompliment, getFortune, createFortune, changeFate, deleteFortune} = require('./ctrl')

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment)

// 4 features
app.get("/api/fortune", getFortune)
app.post("/api/fortuneTell", createFortune)
app.put(`/api/fortune/:id`, changeFate)
app.delete("/api/fortune/:id", deleteFortune)

//goal example
// app.post('api/goals', addGoals)

// app.post("/api/fortune", createFortune)

app.listen(4000, () => console.log("Server running on 4000"));
