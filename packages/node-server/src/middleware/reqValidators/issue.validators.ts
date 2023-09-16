import { NextFunction, Request, Response } from "express";
import { CreateIssueSchema } from "./schemas/issue.schema";
import { InvalidRequest } from "../exception/common.exceptions";

export const createIssue = (req: Request, res: Response, next: NextFunction) => {
    const result = CreateIssueSchema.validate(req.body);
    const errors = result.error?.details.map(err => err.message) || [];
    if(result.error) throw new InvalidRequest(errors);
    res.locals.validBody = result.value;
    next();
}