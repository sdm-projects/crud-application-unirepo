import { Request, Response, NextFunction } from "express";
import { InvalidRequest } from "../exception/common.exceptions";
import ValidatorSchema from "./schemas";

export const createRole = (req: Request, res: Response, next: NextFunction) => {
    const result = ValidatorSchema.createRoleSchema.validate(req.body);
    const errors = result.error?.details.map(err => err.message) || [];
    if(result.error) throw new InvalidRequest(errors);
    res.locals.validBody = result.value;
    next();
}