import * as issueValidators from "./issue.validators";
import * as commentValidators from "./comment.validators";

const reqValidators = {
    ...issueValidators,
    ...commentValidators,
}

export default reqValidators;