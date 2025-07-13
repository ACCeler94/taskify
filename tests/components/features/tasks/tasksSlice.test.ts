import tasksReducer, {
  addTask,
  editTask,
  deleteTask,
  initialState,
} from "../../../../src/components/features/tasks/tasksSlice";
import { describe, it, expect } from "vitest";

describe("tasksSlice reducers", () => {
  it("should return initial state if no action was passed", () => {
    expect(tasksReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should update the state with proper data when addTask action is called", () => {
    const newTaskPayload = {
      title: "Test task",
      desc: "Test description",
      status: "done" as "todo" | "inProgress" | "done",
    };

    const actualState = tasksReducer(initialState, addTask(newTaskPayload));

    expect(actualState).toHaveLength(11);
    expect(actualState[10].title).toBe(newTaskPayload.title);
    expect(actualState[10].desc).toBe(newTaskPayload.desc);
    expect(actualState[10].status).toBe(newTaskPayload.status);
  });

  it("should assign id and createdAt properties to newly created tasks", () => {
    const newTaskPayload = {
      title: "Test task",
      desc: "Test description",
      status: "done" as "todo" | "inProgress" | "done",
    };

    const actualState = tasksReducer(initialState, addTask(newTaskPayload));

    expect(actualState).toHaveLength(11);
    expect(actualState[10].createdAt).toBeTruthy();
    expect(actualState[10].id).toBeTruthy();
  });

  it("should update the task data when editTask action is called", () => {
    const taskToEdit = initialState[0];
    const newData = { title: "Updated task title", desc: "Updated task desc" };

    const actualState = tasksReducer(
      initialState,
      editTask({ id: taskToEdit.id, title: newData.title }),
    );

    expect(actualState[0].title).toBe(newData.title);
    // Check if the other properties remained unchanged
    expect(actualState[0].desc).toBe(taskToEdit.desc);
    expect(actualState[0].status).toBe(taskToEdit.status);
  });

  it("should not change the state if trying to edit a non-existent task", () => {
    const nonExistentId = "mock id";
    const editPayload = {
      id: nonExistentId,
      title: "Title of non-existent task",
    };

    const actualState = tasksReducer(initialState, editTask(editPayload));

    expect(actualState).toEqual(initialState);
    expect(actualState.length).toBe(10);
  });

  it("should delete the task from the state if given proper id", () => {
    const taskToDeleteId = initialState[0].id;

    const actualState = tasksReducer(initialState, deleteTask(taskToDeleteId));
    const task = actualState.find((t) => t.id === taskToDeleteId);

    expect(task).toBeUndefined();
    expect(actualState).toHaveLength(9);
  });

  it("should not change the state if trying to delete a non-existent task", () => {
    const nonExistentId = "mock id";

    const actualState = tasksReducer(initialState, deleteTask(nonExistentId));

    expect(actualState).toEqual(initialState);
    expect(actualState.length).toBe(10);
  });
});
