import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081

app.get("/", (req, res)=>{
    res.send("Hello World!");
})

app.listen(PORT, ()=>{
    console.log(`server is listening on PORT: http://localhost:${PORT}/`)
})