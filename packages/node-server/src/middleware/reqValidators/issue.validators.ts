import { NextFunction, Request, Response } from "express";
import { InvalidRequest } from "../exception/common.exceptions";
import ValidatorSchema from "./schemas";

export const createIssue = (req: Request, res: Response, next: NextFunction) => {
    const result = ValidatorSchema.CreateIssueSchema.validate(req.body);
    const errors = result.error?.details.map(err => err.message) || [];
    if(result.error) throw new InvalidRequest(errors);
    res.locals.validBody = result.value;
    next();
}