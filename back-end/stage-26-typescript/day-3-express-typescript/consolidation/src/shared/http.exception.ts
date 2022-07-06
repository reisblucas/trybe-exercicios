class HttpException extends Error {
  _status: number;

  constructor(status: number, message: string) {
    super(message);
    this._status = status;
  }
}

export default HttpException;