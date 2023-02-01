type ErrorCodes = 'USER_NOT_FOUND' | 'USER_ALREADY_EXISTS';
type ErrorHttpStatusCodes = 404 | 500;

interface DomainError {
  code: ErrorCodes;
  httpStatusCode: ErrorHttpStatusCodes;
  payload: any;
}

class BadRequestError implements DomainError {
  code : ErrorCodes;

  httpStatusCode : ErrorHttpStatusCodes;

  payload;

  constructor(code: ErrorCodes, statusCode: ErrorHttpStatusCodes, payload?: any) {
    this.code = code;
    this.httpStatusCode = statusCode;
    this.payload = payload;
  }
}

export default BadRequestError;
