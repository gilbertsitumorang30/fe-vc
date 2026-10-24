export class ApiError extends Error {
  status: number;
  errors?: Record<string, string>;
  code?: string;

  constructor(
    message: string,
    status: number,
    code?: string,
    errors?: Record<string, string>,
  ) {
    super(message);
    ((this.message = message),
      (this.name = "ApiError"),
      (this.status = status),
      (this.errors = errors),
      (this.code = code));
  }
}
