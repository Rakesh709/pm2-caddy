import express from "express"

const app = express();

const port = 3000


app.get("/",(req,res)=>{
    res.send("Hello world ! ");
})

app.get("/crash",(req,res)=>{
    res.send("App is crashing...")
    process.exit(1)
})

app.get("/:id",(req,res)=>{
    res.send(`Hello world ${req.params.id}`)
})

app.listen(port,()=>{
    console.log("Server is running on port",port);
    
})