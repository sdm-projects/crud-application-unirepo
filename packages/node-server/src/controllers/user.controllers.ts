import { InvalidRequest } from "@src/middleware/exception/common.exceptions";
import { userServices } from "@src/services";
import { NextFunction, Request, Response } from "express";

export const listUsers =async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userServices.listUser();
        res.json({success: true, data: users});
    } catch(e) {
        next(e);
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const user = await userServices.getUserById(userId);
        res.json({success: true, data: user});
    } catch(e) {
        next(e);
    }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = res.locals.validBody;
        const user = await userServices.createUser(userData);
        res.json({success: true, data: user});
    } catch(e) {
        next(e);
    }
}

export const updateUserRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleId = req.body?.roleId;
        const userId = req.params?.userId;
        if(!roleId) throw new InvalidRequest(`Role id: is reqiured`);
        if(!userId) throw new InvalidRequest(`User id: is reqiured`);
        await userServices.updateUserRole(userId, roleId);
        res.json({success: true});
    } catch(e) {
        next(e);
    }
}