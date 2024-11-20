import express from "express";
import { connectToDB, routTest } from "./db/connection";

const app = express();

connectToDB();
console.log("#hola");

routTest();

app.get("/hola",(req,res)=>{
    console.log("hola");
    res.send("hola")
    
})

app.listen("4000",()=>{
    console.log("server on PORT 4000",);
    
})


