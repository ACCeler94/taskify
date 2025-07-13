import { useState } from "react";
import type { TaskStatus } from "../../../../types/types";
import type { CreateTaskInput } from "../../../../schemas/task.schema";

interface TaskFormProps {
  isNew?: boolean;
  formTitle: string;
  taskData?: {
    title: string;
    desc: string;
    status: TaskStatus;
  };
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    newTaskData: CreateTaskInput,
  ) => void;
  formError: string | null;
}

const TaskForm = ({
  formTitle,
  taskData,
  isNew = false,
  handleSubmit,
  formError,
}: TaskFormProps) => {
  const [title, setTitle] = useState(taskData?.title || "");
  const [desc, setDesc] = useState(taskData?.desc || "");
  const [status, setStatus] = useState(taskData?.status || "todo");

  return (
    <div className="my-15 flex min-h-1/3 w-full max-w-2xl flex-col rounded-xl bg-neutral-800 p-8 text-xl">
      <h2 className="mb-5 text-3xl font-bold">{formTitle}</h2>
      {/* Generic error message if Zod validation fails */}
      {formError && (
        <p className="mb-4 font-semibold text-red-500">{formError}</p>
      )}
      <form
        className="flex w-full flex-col text-xl"
        onSubmit={(e) => handleSubmit(e, { title, status, desc })}
      >
        <input
          className="mb-4 rounded-lg bg-neutral-600 p-3 text-xl"
          type="text"
          id="title"
          name="title"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === "Enter" && e.preventDefault();
          }}
          maxLength={150}
          required={isNew}
        />
        <textarea
          className="mb-4 min-h-64 resize-none rounded-lg bg-neutral-600 p-3 text-xl"
          id="desc"
          name="desc"
          placeholder="Description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          maxLength={1000}
          required={isNew}
        />
        <select
          className="mb-16 rounded-lg bg-neutral-600 p-3 text-xl"
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          type="submit"
          className="cursor-pointer rounded-4xl bg-(--color-btn-blue) px-8 py-2 text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
