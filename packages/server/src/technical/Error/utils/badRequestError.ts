
export default class BadRequestError extends Error { 
  public statusCode : number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.name = "BadRequestError";
    this.message = message;
    this.statusCode = statusCode;
  }
}