import { useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../../components/common/BackButton/BackButton";

import { useNavigate } from "react-router";
import TaskForm from "../../components/features/tasks/TaskForm/TaskForm";
import { addTask } from "../../components/features/tasks/tasksSlice";
import {
  createTaskSchema,
  type CreateTaskInput,
} from "../../schemas/task.schema";

const NewTask = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    newTaskData: CreateTaskInput,
  ) => {
    e.preventDefault();

    const result = createTaskSchema.safeParse(newTaskData);

    if (!result.success) {
      const errorMessage = "Please fill out the form correctly";
      setFormError(errorMessage);
      return;
    }

    setFormError(null);
    dispatch(addTask(result.data));
    navigate("/");
  };

  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4">
      <BackButton />
      <TaskForm
        formTitle="Add Task"
        isNew={true}
        handleSubmit={handleSubmit}
        formError={formError}
      />
    </main>
  );
};

export default NewTask;
