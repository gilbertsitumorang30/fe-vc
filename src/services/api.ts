import axios from "axios";
import { ApiError } from "../errors/ApiError.ts";
import { getToken } from "../utils/token.ts";
import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      throw new ApiError(
        data?.message ?? "Something went wrong",
        status,
        data?.code,
        data?.errors,
      );
    }

    if (error.request) {
      toast.error("Terjadi kesalahan. Silahkan coba lagi");
      throw new ApiError("Unable to connect to server", 0);
    }

    toast.error("Terjadi kesalahan. Silahkan coba lagi");

    throw new ApiError("An unexpected error occurred", 0);
  },
);

api.interceptors.request.use((request) => {
  const token = getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
