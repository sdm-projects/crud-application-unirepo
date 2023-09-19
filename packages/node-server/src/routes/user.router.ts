import { UserControllers } from "@src/controllers";
import reqValidators from "@src/middleware/reqValidators";
import { Router } from "express";

const router = Router();

router.get("", UserControllers.listUsers);
router.post("", reqValidators.createUser, UserControllers.createUser);
router.get("/:userId", UserControllers.getUserById);
router.put("/:userId/role", UserControllers.updateUserRole);

export default router;