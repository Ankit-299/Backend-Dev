const express=require('express');
const app=express();
app.use(express.json());
const students=[
    {name:"yash",id:1,branch:"CS"},
    {name:"akash",id:2,branch:"CS"},
    {name:"aryan",id:3,branch:"cs"}
];
app.post('/students/add',async(req,res)=>{
    const data =req.body;
  //  students.push({name:data.name,id:data.id,branch:data.branch});
   students.push(data);
    res.send(students);
});
app.listen(8000,()=>console.log('Server is running on port 8000'));
