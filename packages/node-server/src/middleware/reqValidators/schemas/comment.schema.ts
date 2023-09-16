import Joi from "joi";
import {commonTypes} from "@crud-application/common"

export const CreateCommentSchema = Joi.object<commonTypes.CreateCommentRequest>({
    comment: Joi.string().required(),
    createdBy: Joi.date().required(),
});