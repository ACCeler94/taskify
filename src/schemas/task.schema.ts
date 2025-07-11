import { z } from "zod";

// Typy statusów, np. importowane z types
export const taskStatusEnum = z.enum(["todo", "inProgress", "done"]);

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(150),
  desc: z.string().min(1, "Description is required").max(1000),
  status: taskStatusEnum.default("todo"),
});

export const editTaskSchema = z
  .object({
    title: z.string().min(1, "Title is required").max(150).optional(),
    desc: z.string().max(1000).optional(),
    status: taskStatusEnum.optional(),
  })
  .refine((data) => data.title || data.desc || data.status, {
    message: "At least one field must be provided",
    path: [],
  });

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type EditTaskInput = z.infer<typeof editTaskSchema>;
