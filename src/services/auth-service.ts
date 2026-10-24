import type { User } from "../types/user.ts";
import { setToken } from "../utils/token.ts";
import api from "./api.ts";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  user: User;
  token: string;
}
export const login = async (payload: LoginRequest) => {
  const response = await api.post<LoginResponse>("/auth/login", payload);

  const token = response.data.data.token;

  setToken(token);

  return response.data;
};

export const authService = {
  login,
};
