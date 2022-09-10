import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodypParser from "body-parser";

const app = express();

app.use(bodypParser.json({limit:"20mb", extended:true}));
app.use(bodypParser.urlencoded({limit:"20mb", extended:true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://darkley:3152@cluster0.sqc84we.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => app.listen(PORT, ()=> 
    console.log(`Connection running on port: ${PORT}`)
)).catch((err) => console.log(err.message))