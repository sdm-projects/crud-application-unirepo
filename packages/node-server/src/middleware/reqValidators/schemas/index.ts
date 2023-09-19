import * as issueSchemas from "./issue.schema";
import * as userSchemas from "./user.schema";
import * as roleSchemas from "./role.scheama";
import * as commentSchemas from "./comment.schema";

const ValidatorSchema = {
    ...issueSchemas,
    ...userSchemas,
    ...roleSchemas,
    ...commentSchemas,
};

export default ValidatorSchema;