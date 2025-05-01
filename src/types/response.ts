interface MessageResponse {
  success: boolean;
  message: string;
}

interface ErrorResponse extends MessageResponse {}

export { type MessageResponse, type ErrorResponse };
