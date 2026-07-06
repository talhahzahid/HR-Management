import { api } from "@/lib/api";

interface AttendanceParams {
  userId?: number | string;
  month?: number;
  year?: number;
}

export interface Attendance {
  id: number;
  createdAt: string;
  userId: number;
  userName: string;
  checkInTime: string;
  checkOutTime: string;
  status: string;
  workHours: string;
  dailyWorkingHours: number;
}

export interface AttendanceData {
  userId: number;
  month: number;
  year: number;
  totalDays: number;
  totalMonthlyHours: string;
  attendances: Attendance[];
}

interface AttendanceRecordResponse {
  code: string;
  message: string;
  responseData: {
    data: AttendanceData;
  };
}

export const attendanceEmployeeByUserId = (params?: AttendanceParams) => {
  return api<AttendanceRecordResponse>({
    endpoint: "/attendance/monthlyAttendanceByUserId",
    params,
  });
};
