const express = require('express');
let app = express();
let port = 3000;

app.get("/orders",(req,res)=>{
    const message = "Here is the list of all orders.";
   console.log(`GET ${req.url} - ${message}`);
   res.send(message);  
});


app.post("/orders",(req,res)=>{
    const message = "A new order has been created.";
   console.log(`POST  ${req.url} - ${message}`);
   res.send(message);  
})

app.get("/users",(req,res)=>{
    const message = "Here is the list of all users.";
   console.log(`GET ${req.url} - ${message}`);
   res.send(message);  
})

app.post("/users",(req,res)=>{
    const message = "A new user has been added.";
   console.log(` ${req.url} - ${message}`);
   res.send(message);  
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});