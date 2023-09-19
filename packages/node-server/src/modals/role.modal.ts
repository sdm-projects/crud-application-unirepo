import mongoose, { Schema } from "mongoose";
import {Role} from "@crud-application/common/types"

const roleSchema = new Schema<Role>({
    name: {type: String, required: true},
})

roleSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
})

export default mongoose.model("Role", roleSchema, "roles");