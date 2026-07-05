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

export interface LeaveStatusItem {
  id: number;
  createdAt: string;
  modifiedAt?: string | null;
  userId: number;
  userName: string;
  leaveType: string;
  leaveDescription: string;
  maxDays: number;
  status: string;
  startDate: string;
  endDate: string;
}

interface LeaveStatusListResponse {
  code: string;
  message: string;
  responseData: {
    leaves: {
      data: LeaveStatusItem[];
      total: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

export const getLeaveStatusList = (params?: { byUserId?: number | string }) => {
  return api<LeaveStatusListResponse>({
    endpoint: "/leaves/byId",
    params,
  });
};
