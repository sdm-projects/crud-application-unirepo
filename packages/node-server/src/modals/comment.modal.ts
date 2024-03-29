import mongoose, { Schema } from "mongoose";
import { Comment } from "@crud-application/common/types";

const commentSchema = new Schema<Comment>({
    createdBy: {type: String, required: true},
    createdAt: {type: Date, required: true, default: new Date() },
    comment: {type: String, required: true},
});

commentSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id,
        delete ret._id;
        delete ret.__v;
    },
})

export default mongoose.model("Comment", commentSchema, "comments");