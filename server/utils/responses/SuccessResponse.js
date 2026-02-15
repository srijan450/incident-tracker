import ApiResponse from "./ApiResponse.js";

class SuccessResponse extends ApiResponse {
  constructor(message = "Success", data = null, meta = null) {

    super({
      status: "success",
      message,
      data,
      meta,
    });
  }
}

export default SuccessResponse;
