import * as issueValidators from "./issue.validators";
import * as commentValidators from "./comment.validators";
import * as userValidators from "./user.validators";
import * as roleValidators from "./role.validators";

const reqValidators = {
    ...issueValidators,
    ...commentValidators,
    ...userValidators,
    ...roleValidators,
}

export default reqValidators;