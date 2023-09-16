import customExceptionHandler from "./custom.exceptionHandler";
import * as commonExceptions from "./common.exceptions";

export const exceptions = {
    ...commonExceptions,
}

export default customExceptionHandler;