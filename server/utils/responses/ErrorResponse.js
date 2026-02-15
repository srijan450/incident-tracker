import ApiResponse from "./ApiResponse.js";

class ErrorResponse extends ApiResponse {
  constructor(message = "Internal Server Error", error = null) {
    super({
      status: "error",
      message,
      error,
    });
  }
}

export default ErrorResponse;
