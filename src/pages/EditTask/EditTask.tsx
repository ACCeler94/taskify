import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import BackButton from "../../components/common/BackButton/BackButton";
import TaskForm from "../../components/features/tasks/TaskForm/TaskForm";
import { editTask } from "../../components/features/tasks/tasksSlice";
import { editTaskSchema, type EditTaskInput } from "../../schemas/task.schema";
import type { RootState } from "../../types/types";
import { diffTaskData } from "../../utils/diffTaskData";

const EditTask = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const { id } = useParams();
  const taskData = useSelector((state: RootState) =>
    state.tasks.find((t) => t.id === id),
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    editData: EditTaskInput,
  ) => {
    e.preventDefault();
    const result = editTaskSchema.safeParse(editData);

    if (!result.success) {
      const errorMessage = "Please fill out the form correctly";
      setFormError(errorMessage);
      return;
    }
    // Diff data to not send unchanged data to the Redux/API
    const diffedData = diffTaskData(result.data, taskData!);
    if (Object.keys(diffedData).length === 0) {
      const errorMessage = "Please edit data before submitting changes";
      setFormError(errorMessage);
      return;
    }

    setFormError(null);
    dispatch(editTask({ id: taskData!.id, ...diffedData }));
    navigate("/");
  };

  // [TODO] - replace with not found page or redirect to not found page
  if (!taskData) {
    return (
      <main className="flex h-full flex-col items-center justify-center px-4">
        <h2 className="text-6xl">404 Task not found...</h2>
      </main>
    );
  }

  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4">
      <BackButton />
      <TaskForm
        formTitle="Edit Task"
        isNew={false}
        handleSubmit={handleSubmit}
        formError={formError}
        taskData={taskData}
      />
    </main>
  );
};

export default EditTask;
