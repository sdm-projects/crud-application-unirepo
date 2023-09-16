import { IssueStatus, issueStatutsList } from "../types/issue.types"

export const isValidStatus = (status: string): status is IssueStatus => {
    return issueStatutsList.includes(status as any);
}
