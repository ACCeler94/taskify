import { describe, it, expect } from "vitest";
import { Task } from "../../src/types/types";
import { diffTaskData } from "../../src/utils/diffTaskData";
import { EditTaskInput } from "../../src/schemas/task.schema";
describe("diffTaskData", () => {
  const originalTask: Task = {
    id: "1",
    title: "Original Title",
    desc: "Original Description",
    status: "todo",
    createdAt: "2025-01-01T00:00:00Z",
  };

  it.each([
    {
      scenario: "should return only the changed title",
      editData: { title: "New Title" },
      expected: { title: "New Title" },
    },
    {
      scenario: "should return only the changed description",
      editData: { desc: "New Description" },
      expected: { desc: "New Description" },
    },
    {
      scenario: "should return only the changed status",
      editData: { status: "inProgress" },
      expected: { status: "inProgress" },
    },
    {
      scenario: "should return multiple changed fields",
      editData: { title: "New Title", status: "done" },
      expected: { title: "New Title", status: "done" },
    },
    {
      scenario: "should return an empty object if nothing changed",
      editData: { title: "Original Title", desc: "Original Description" },
      expected: {},
    },
    {
      scenario: "should return an empty object for empty input",
      editData: {},
      expected: {},
    },
  ])("$scenario", ({ editData, expected }) => {
    const diff = diffTaskData(editData as EditTaskInput, originalTask);

    expect(diff).toEqual(expected);
  });
});
