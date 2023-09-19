import { RoleControllers } from "@src/controllers";
import reqValidators from "@src/middleware/reqValidators";
import { Router } from "express";

const router = Router();

router.get("", RoleControllers.listRoles);
router.post("", reqValidators.createRole, RoleControllers.createRole);
router.get("/:roleId", RoleControllers.getRoleById);

export default router;