import { CustomError } from './CustomError';

class UnexpectedError extends CustomError {
  statusCode = 500;
  reason = 'Unexpected Error';
  constructor() {
    super('Unexpected Error');

    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

export { UnexpectedError };
