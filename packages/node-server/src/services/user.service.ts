import { createUserRequest } from "@crud-application/common/types";
import { DataNotFound, InvalidRequest } from "@src/middleware/exception/common.exceptions";
import userModal from "@src/modals/user.modal"
import { Error } from "mongoose";

export const listUser = () => {
    return userModal.find();
}

export const getUserById = async (userId: string) => {
    try {

        const user = await userModal.findById(userId).populate({path: "role"});
        if(!user) throw new DataNotFound(`User with id: ${userId} not found`);
        return user;

    } catch (e) {
        if(e instanceof Error.CastError || e instanceof Error.DocumentNotFoundError) {
            return new InvalidRequest(`user id: ${userId} is invalid or not found`);
        }

        throw e;
    }
}

export const createUser =async (userData: createUserRequest) => {
    try {
        const user: createUserRequest = {
            name: userData.name,
            username: userData.username,
            password: userData.password,
            role: userData.role,
        }
        const newUser = new userModal({...user});
        return newUser.save();
    } catch (e) {
        if(e instanceof Error.ValidationError || e instanceof Error.ValidatorError) {
            throw new InvalidRequest(e.message);
        }

        throw e;
    }
}

export const updateUserRole = async (userId: string, roleId: string) => {
    try {
        userModal.findByIdAndUpdate(userId, {
            $set: {role: roleId}
        })
    } catch (e) {
        if(e instanceof Error.ValidationError || e instanceof Error.ValidatorError) {
            throw new InvalidRequest(e.message);
        }

        if(e instanceof Error.DocumentNotFoundError) {
            throw new DataNotFound(`User with id: ${userId} not found`);
        }

        throw e;
    }
};