import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
