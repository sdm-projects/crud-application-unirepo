import { InvalidRequest } from "@src/middleware/exception/common.exceptions";
import { roleServices } from "@src/services";
import { NextFunction, Request, Response } from "express";

export const createRole = async (req: Request, res: Response, next: NextFunction) => {
    const roleName = res.locals.validBody.name;

    try {
        if (!roleName) throw new InvalidRequest(`roleName is required to create the role`);
        const role = await roleServices.createRole(roleName);
        res.json({ success: true, data: role });
    } catch (e) {
        next(e);
    }
};

export const listRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await roleServices.listRoles();

        res.json({success: true, data: roles})
    } catch (e) {
        next(e);
    }
}

export const getRoleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roleId = req.params.roleId;
        const role = await roleServices.roleById(roleId);
        res.json({success: true, data: role})
    } catch(e) {
        next(e);
    }
}