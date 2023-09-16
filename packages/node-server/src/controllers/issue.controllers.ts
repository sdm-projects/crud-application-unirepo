import { CreateCommentRequest, CreateIssueRequest } from "@crud-application/common/types";
import { InvalidRequest } from "@src/middleware/exception/common.exceptions";
import { issueServices } from "@src/services";
import { NextFunction, Request, Response } from "express";

export const listIssue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const issues = await issueServices.getIssues();
        res.json({success: true, data: issues});
    } catch(e) {
        next(e);
    }
};

export const getIssueById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const issueId = req.params?.issueId;
        if(!issueId) throw new InvalidRequest(`invalid issueId: ${issueId}`); 
        const issue = await issueServices.getIssueById(issueId);
        res.json({success:true, data: issue});
    } catch(e) {
        next(e);
    }
};

export const createIssue = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        const issuseData = res.locals.validBody;
        const createIssueRequest: CreateIssueRequest = {
            title: issuseData?.title,
            description: issuseData?.description,
            createdBy: issuseData?.createdBy,
            tags: issuseData?.tags,
        }

        const issue = await issueServices.createIssue(createIssueRequest);

        res.json({success: true, data: issue});
    } catch(e) {
        next(e);
    }
}

export const addIssueComment = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        const issueId = req.params?.issueId;
        if(!issueId) throw new InvalidRequest(`Issue id is required`);

        const commentData = res.locals.validBody;
        const comment: CreateCommentRequest = {
            createdBy: commentData?.createdBy,
            comment: commentData?.comment,
        }

        await issueServices.addComment(issueId, comment);
        res.json({success: true});

    } catch(e) {
        next(e);
    }
};

export const updateIssueStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const issueId = req.params?.issueId;
        const issueStatus = req.body?.issueStatus;
        if(!issueId) throw new InvalidRequest(`Issue id is required`);
        if(!issueStatus) throw new InvalidRequest(`Issue id is required`);

        await issueServices.updateIssueStatus(issueId, issueStatus);
        res.json({success: true});

    } catch(e) {
        next(e)
    }
};