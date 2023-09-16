import { isValidStatus } from "@crud-application/common/helpers";
import { Issue } from "@crud-application/common/types";
import mongoose, { Mongoose, Schema } from "mongoose";

const issueSchema = new Schema<Issue>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: [{type: String, required: true}],
    status: {type: String, required: true, validate: isValidStatus},
    comments: [{
        type: Schema.ObjectId,
        ref: "Comment",
        default: [],
    }],
    createdBy: {type: String, required: true},
    createAt: {type: Date, required: true, default: new Date().getMilliseconds()},
    updatedAt: {type: Date, required: true, default: new Date().getMilliseconds()}
});

issueSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
})

export default mongoose.model("Issue", issueSchema, "issues");