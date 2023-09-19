import { Router } from "express";
import issueRouter from "./issue.router";
import roleRouter from "./role.router";
import userRouter from "./user.router";

const router = Router();

router.use("/api/issue", issueRouter);
router.use("/api/role", roleRouter);
router.use("/api/user", userRouter);

export default router;