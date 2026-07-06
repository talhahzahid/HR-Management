import z from "zod";

export const leaveSchema = z.object({
    userId: z.string().optional(),
    leaveType: z.string().min(1, "Leave type is required"),
    leaveDescription: z.string().min(5, "Description is required"),
    maxDays: z.number().min(1, "Max days is required"),
    status: z.string().optional(),   // ← make it optional, no default
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
});
