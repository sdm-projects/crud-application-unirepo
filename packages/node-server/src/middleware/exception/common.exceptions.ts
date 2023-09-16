export abstract class CustomException {
    public abstract statusCode: number;
    public message: string | string[];

    constructor(message: string | string[]) {
        this.message = message;
    }

    get json() {
        return {
            error: this.message,
        }
    }
}

export class DataNotFound extends CustomException {
    public statusCode: number = 404;
}

export class InvalidRequest extends CustomException {
    public statusCode: number = 401;
}