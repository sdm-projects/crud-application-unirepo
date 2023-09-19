import { DataNotFound, InvalidRequest } from "@src/middleware/exception/common.exceptions";
import roleModal from "@src/modals/role.modal";
import { Error } from "mongoose";

export const listRoles = async () => {
    return await roleModal.find();
}

export const roleById = async (roleId: string) => {
    try {
        const role = await roleModal.findById(roleId);
        if (!role) throw new DataNotFound(`Role with id: ${roleId} not found`);
        return role;
    } catch (e) {
        if (e instanceof Error.CastError || e instanceof Error.DocumentNotFoundError) {
            throw new InvalidRequest(`role id: ${roleId} is invalid or not found`);
        }
        throw e;
    }
}

export const createRole = async (name: string) => {
    const role = new roleModal();
    role.name = name;

    try {
        return await role.save();
    } catch (e) {
        if (e instanceof Error.ValidationError || e instanceof Error.ValidatorError) throw new InvalidRequest(e.message);
        throw e;
    }
};
