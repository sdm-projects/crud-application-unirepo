import { NextFunction, Request, Response } from "express";
import { CreateCommentSchema } from "./schemas/comment.schema";
import { InvalidRequest } from "../exception/common.exceptions";

export const createComment = (req: Request, res: Response, next: NextFunction) => {
    const result = CreateCommentSchema.validate(req.body);
    const errors = result.error?.details.map(err => err.message) || [];
    if(result.error) throw new InvalidRequest(errors);
    res.locals.validBody = result.value;
    next();
}
