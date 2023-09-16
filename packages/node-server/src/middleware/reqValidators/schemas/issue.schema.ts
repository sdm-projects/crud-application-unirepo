import Joi from "joi";
import {commonTypes} from "@crud-application/common"

export const CreateIssueSchema = Joi.object<commonTypes.CreateIssueRequest>({
    title: Joi.string().required(),
    description: Joi.string().required(),
    createdBy: Joi.string().required(),
    tags: Joi.string().required(),
});