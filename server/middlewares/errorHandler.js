import AppError from "../utils/errors/AppError.js";
import ErrorResponse from "../utils/responses/ErrorResponse.js";

const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return new ErrorResponse(errors.join(", "), true).send(res, 400);
  }

  if (err instanceof AppError) {
    return new FailResponse(err.message, {
      code: err.code,
    }).send(res, err.statusCode);
  }
};

export default errorHandler;
