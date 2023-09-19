import { User } from "@crud-application/common/types";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Schema.ObjectId, ref: "Role", default: null},
});

userSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

export default mongoose.model("User", userSchema, "users");