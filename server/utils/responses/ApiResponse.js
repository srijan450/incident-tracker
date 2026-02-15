class ApiResponse {
  constructor({ status, message, data = null, error = null, meta = null }) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
    this.meta = meta;
  }
  send(res, statusCode) {
    return res.status(statusCode).json(this);
  }
}

export default ApiResponse;
