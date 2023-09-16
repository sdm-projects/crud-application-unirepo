import { IssueControllers } from "@src/controllers";
import reqValidators from "@src/middleware/reqValidators";
import { Router } from "express";

const router = Router();

router.get("", IssueControllers.listIssue);
router.post("", reqValidators.createIssue, IssueControllers.createIssue);
router.get("/:issueId", IssueControllers.getIssueById);
router.put("/:issueId/status", IssueControllers.updateIssueStatus);
router.post("/:issueId/comment", reqValidators.createComment, IssueControllers.addIssueComment);

export default router;