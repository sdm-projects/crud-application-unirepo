import express, { Request, Response } from "express";
import loadEnv from "./helpers/env.helper";
import mongoose, { ConnectOptions } from "mongoose";
import router from "./routes";
import customExceptionHandler from "./middleware/exception";

loadEnv();

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL || "";

const app = express();

app.get("", (req: Request, res: Response) => {
    res.json({ message: "Hi, welcome the node crud application" });
});

app.use(router);
app.use(customExceptionHandler)


mongoose.connect(mongoUrl, { useNewUrlParser: true } as ConnectOptions)
    .then(() => {
        app.listen(port, () => {
            console.log(`Started node server at port: ${port}`);
        })
    });