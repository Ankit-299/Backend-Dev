const http=require('http');
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.get('/about',(req,res)=>{
    return res.send('About Page');
});

//const myServer=http.createServer(app);

//myServer.listen(8000,()=>console.log('Server is running on port 8000'));
