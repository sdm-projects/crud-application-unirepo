import { commonTypes } from "@crud-application/common";
import Joi from "joi";

export const createRoleSchema = Joi.object<commonTypes.createRoleRequest>({
    name: Joi.string().required(),
});