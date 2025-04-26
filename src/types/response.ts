interface MessageResponse {
  message: string;
}

interface ErrorResponse extends MessageResponse {
  success: false;
}

export { type MessageResponse, type ErrorResponse };
