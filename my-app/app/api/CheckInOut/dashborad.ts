import { api } from "@/lib/api";

interface Body {
  checkInTime?: string;
  day?: string;
  checkOutTime?: string;
}

interface checkInOutResponse {}

export const checkInOut = (body: Body) => {
  return api<checkInOutResponse>({
    endpoint: "/attendance/mark",
    options: {
      method: "POST",
      body: JSON.stringify(body),
    },
  });
};
