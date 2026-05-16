import { api } from "@/lib/api";

export interface LeaveData {
  id: number;
  createdBy: string | null;
  createdAt: string;
  modifiedAt: string | null;
  userId: number;
  userName: string;
  totalLeaves: number;
  sickLeaves: number;
  casualLeaves: number;
  annualLeaves: number;
  isAllLeavesEncashed: boolean | null;
}

interface LeaveResponse {
  code: string;
  message: string;
  responseData: {
    data: LeaveData;
  };
}

export const getLeaves = () => {
  return api<LeaveResponse>({
    endpoint: "/leaveLog/getLeaves",
  });
};