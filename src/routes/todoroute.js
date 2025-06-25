import express from "express";
import { createtodo } from "../controllers/todocontroller.js";

const router = express.Router();

//routes
router.post('/',createtodo);

export default router;