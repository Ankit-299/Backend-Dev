const express=require('express');
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"sachin",marks:75,city:"pune"},
    {id:2,name:"Ankit",marks:65,city:"pune"},
    {id:3,name:"Amit",marks:85,city:"pune"}
]
// view students
app.get('/students',(req,res)=>{
    res.json(students);
});
// delete students
app.delete("students/id",(req,res)=>{

    const id=req.params.id;
    const index=students.findIndex(s=>s.id==id);
    if(index==-1){
        return res.status(404).json({message:"Student not found"});
    }
    if(students[index].marks<70){
        return res.status(400).json({message:"Student cannot be deleted as marks are less than 70"});
    }   
    students.splice(index,1);
    res.json({message:"Student deleted successfully"});
})
const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));  
