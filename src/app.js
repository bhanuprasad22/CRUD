import express from "express";

const app = express();

import todoroutes from "./routes/todoroute.js"

app.use(express.json());

app.use('/api/v1/todos',todoroutes)

export default app;
