export abstract class CustomException {
    public abstract statusCode: number;
    public message: string;

    constructor(message: string) {
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