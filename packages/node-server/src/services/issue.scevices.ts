import { CreateComment, CreateCommentRequest, CreateIssue, CreateIssueRequest, IssueStatus  } from "@crud-application/common/types";
import { DataNotFound, InvalidRequest } from "@src/middleware/exception/common.exceptions";
import commentModal from "@src/modals/comment.modal";
import issueModal from "@src/modals/issue.modal";
import { Error } from "mongoose";

export const getIssues = async () => {
    return await issueModal.find().populate({path: "comments"});
};

export const getIssuesNoPopulating = async () => {
    return await issueModal.find();
}

export const getIssueById = async (issueId: string) => {
    try {

        return await issueModal.findById(issueId).populate({path: "comments"});

    } catch(e) {
        if(e instanceof Error.CastError || e instanceof Error.DocumentNotFoundError) {
            throw new InvalidRequest(`issue id: ${issueId} is invalid or not found`);
        }
        throw e;
    }
}

export const getIssueByIdNoPopulate = async (issueId: string) => {
    try {

        return await issueModal.findById(issueId);

    } catch(e) {
        if(e instanceof Error.CastError || e instanceof Error.DocumentNotFoundError) {
            throw new InvalidRequest(`issue id: ${issueId} is invalid or not found`);
        }
        throw e;
    }
}

export const createIssue = async (issueData: CreateIssueRequest) => {
    try {

        const issue: CreateIssue = {
            ...issueData,
            status: "open",
            comments: [],
            createAt: new Date(),
            updatedAt: new Date(),
            tags: issueData?.tags || [],
        }
        
        const newIssue = new issueModal({
            ...issue,
        });
        return await newIssue.save();
    } catch(e) {
        if(e instanceof Error.ValidationError || e instanceof Error.ValidatorError) {
            throw new InvalidRequest(e.message);
        }

        throw e;
    } 
}

export const addComment = async (issueId: string, commentData: CreateCommentRequest) => {
    try {  
        // fetching to check if issue is present before creating the comment
        getIssueById(issueId);

        const comment: CreateComment = {
            ...commentData,
            createdAt: new Date(),
        }
        
        const newComment = new commentModal({
            ...comment,
        });
        await newComment.save();

        await issueModal.findByIdAndUpdate(issueId, {
            $set: {updatedAt: new Date()},
            $push: {comments: newComment},
        })

    } catch(e) {
        if(e instanceof Error.ValidationError || e instanceof Error.ValidatorError) {
            throw new InvalidRequest(e.message);
        }

        if(e instanceof Error.DocumentNotFoundError) {
            throw new DataNotFound(`Issue with id: ${issueId} not found`);
        }

        throw e;
    }
}

export const updateIssueStatus = async (issueId: string, status: IssueStatus) => {
    try {
        await issueModal.findByIdAndUpdate(issueId, {
            $set: {
                updatedAt: new Date(),
                status: status,
            }
        })

    } catch(e) {
        if(e instanceof Error.DocumentNotFoundError) {
            throw new DataNotFound(`Issue with id: ${issueId} not found`);
        }
        if(e instanceof Error.ValidationError || e instanceof Error.ValidatorError) {
            throw new InvalidRequest(`invalid status: ${status}`);
        }

        throw e;
    }
};