import { NextFunction, Request, Response } from "express";
import { CustomException } from "./common.exceptions";

const customExceptionHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof CustomException) res.status(error.statusCode).json(error.json);
    res.status(500).json({message: "Onternal server error"});
};

export default customExceptionHandler;