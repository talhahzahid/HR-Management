// api/auth.ts
import { api } from "@/lib/api";

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  code: "AMS_SUCCESS_00";
  message: String;
  responseData: {
    name: string;
    email: string;
    token: string;
    userId: string;
  };
}

export const login = (body: LoginBody) =>
  api<LoginResponse>({
    endpoint: "/users/login",
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });
