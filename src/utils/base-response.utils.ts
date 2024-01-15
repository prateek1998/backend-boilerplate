interface IResponse<T> {
  success: boolean;
  errorCode: number | string;
  message: string | number;
  data: T | undefined;
}

export default class BaseResponse {
  constructor() {}

  private response: IResponse<any> = {
    success: false,
    errorCode: 0,
    message: '',
    data: {},
  };

  protected getError(code: string | number, message: string | number): any {
    this.response.errorCode = code;
    this.response.message = message;
    return this.response;
  }

  protected sendError(res: any, error: (string | number)[]) {
    this.response.success = false;
    delete this.response.data;
    let errorObj = this.getError(error[0], error[1]);
    res.status(error[2]).send(errorObj);
  }

  protected sendSuccess(res: any, statusCode: string | number, data: any) {
    this.response.success = true;
    this.response.data = data;
    delete this.response.errorCode;
    delete this.response.message;
    res.status(statusCode).send(this.response);
  }
}
