import {todo} from "../models/todo.js";

//create  a todo

export const createtodo = async (req,res) =>{
   try {
     const {title,description}=req.body;
     const newtodo=await todo.create({
         title,
         description
     })
    //  resizeBy.status(201).json(newtodo);
    res.status(201).json(newtodo);
   } catch (error) {
        res.status(404).json({message:error.message})
    
   }
}


//read a todo

//update

//delete