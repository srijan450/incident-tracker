import ApiResponse from "./ApiResponse.js";

class PaginatedResponse extends ApiResponse {
  constructor(message, data, { page, limit, total }) {
    const totalPages = Math.ceil(total / limit);

    super({
      status: "success",
      message,
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  }
}

export default PaginatedResponse;
