import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";


const app = express();

app.use(express.json());

app.use(morgan('method: url :status :res[content-lenght] - :response-time ms'));

app.get("/get", (req, res)=>{
    res.send("Server Starts");
})

dotenv.config();

const port = process.env.PORT;

app.listen(port , ()=>{
    console.log("Server Starts at" , port);

});