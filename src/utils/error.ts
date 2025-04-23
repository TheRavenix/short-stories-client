import axios from "axios";

function isNetworkError(error: any): boolean {
  return (
    axios.isAxiosError(error) &&
    (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED")
  );
}

function isNextJSFetchError(error: any): boolean {
  return error instanceof TypeError && error.message === "fetch failed";
}

export { isNetworkError, isNextJSFetchError };
