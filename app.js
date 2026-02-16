const express = require("express");
const app = express();

app.set("view engine","ejs");

const users = [
 {name:"Ankit"},
 {name:"Rahul"},
 {name:"Aman"}
];

app.get("/users",(req,res)=>{

const name=req.query.name;

let filteredUsers=users;

if(name){

filteredUsers=users.filter(user=>
user.name.toLowerCase().includes(name.toLowerCase())
);

}

res.render("users",{filteredUsers});

});
