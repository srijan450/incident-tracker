import ApiResponse from "./ApiResponse.js";

class FailResponse extends ApiResponse {
  constructor(message = "Request failed", error = null) {
    super({
      status: "fail",
      message,
      error,
    });
  }
}

export default FailResponse