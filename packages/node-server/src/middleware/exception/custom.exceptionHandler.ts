import { NextFunction, Request, Response } from "express";
import { commonExceptionsList } from "./common.exceptions";

const isCustomException = (error: any) => {
    return [
        commonExceptionsList
    ].find(exception => typeof exception === typeof error)
}

const customExceptionHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Enception occured: ", error)
    if(isCustomException(error)) res.status(error.statusCode).json({success: false, error: error.json});
    res.status(500).json({success: false, error: "Internal server error"});
};

export default customExceptionHandler;