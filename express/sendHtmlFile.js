
import express from "express";
import {PORT} from "./env.js";
import path from "path"
const app=express()

app.get("/",(req,res)=>{

  const __filename =new URL (import.meta.url).pathname
  console.log(__filename);
  const homepage=path.join(import.meta.dirname,"public","index.html")
  res.sendFile(homepage);

});
app.listen(PORT,()=>{
  console.log("the server is runnin  at : ") 
});
