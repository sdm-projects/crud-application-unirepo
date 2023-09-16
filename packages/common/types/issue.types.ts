
export const issueStatutsList = ["open", "inProgress", "closed"] as const;
export type IssueStatus = typeof issueStatutsList[number];

export interface Comment {
    id: string;
    createdBy: string;
    comment: string;
    createdAt: Date;
}

export type Comments = Comment[];

export interface Issue {
    id: string;
    title: string;
    description: string;
    tags: string[];
    status: IssueStatus;
    comments: Comments;
    createdBy: string;
    createAt: Date;
    updatedAt: Date;
}

export type Issues = Issue[];

export type CreateCommentRequest = Pick<Comment, "createdBy" | "comment">;
export type CreateComment = Omit<Comment, "id">;

export type CreateIssueRequest = Pick<Issue, "title" | "description" | "createdBy"> & Partial<Pick<Issue, "tags">>;
export type CreateIssue = Omit<Issue, "id">;