import { Router } from "express";
import issueRouter from "./issue.router";

const router = Router();

router.use("/issue", issueRouter);

export default router;