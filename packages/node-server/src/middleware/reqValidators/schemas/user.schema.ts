
import { commonTypes } from "@crud-application/common";
import Joi from "joi";

export const createUserSchema = Joi.object<commonTypes.createUserRequest>({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});