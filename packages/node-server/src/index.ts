import express, { Request, Response } from "express";
import loadEnv from "./helpers/env.helper";
import mongoose, { ConnectOptions } from "mongoose";

loadEnv();

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL || "";

const app = express();

app.get("", (req: Request, res: Response) => {
    res.json({ message: "Hi, welcome the node crud application" });
});


mongoose.connect(mongoUrl, { useNewUrlParser: true } as ConnectOptions)
    .then(() => {
        app.listen(port, () => {
            console.log(`Started node server at port: ${port}`);
        })
    });