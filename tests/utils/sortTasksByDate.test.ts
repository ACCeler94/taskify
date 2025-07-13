import { describe, it, expect } from "vitest";
import { sortTasksByDate } from "../../src/utils/sortTasksByDate";
import { Task } from "../../src/types/types";

describe("sortTasksByDate", () => {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Task title 1",
      desc: "Task description 1",
      status: "todo",
      createdAt: "2025-01-02T00:00:00Z",
    },
    {
      id: "2",
      title: "Task title 2",
      desc: "Task description 2",
      status: "todo",
      createdAt: "2025-01-01T00:00:00Z", // Oldest
    },
    {
      id: "3",
      title: "Task title 3",
      desc: "Original Description 3",
      status: "todo",
      createdAt: "2025-01-03T00:00:00Z", // Newest
    },
  ];

  it("should return sorted tasks by date in ascending order for asc argument", () => {
    const sortedArr = sortTasksByDate({ sortingOrder: "asc", tasks });

    expect(sortedArr[0].id).toBe("2");
    expect(sortedArr[1].id).toBe("1");
    expect(sortedArr[2].id).toBe("3");
  });

  it("should return sorted tasks by date in descending order for desc argument", () => {
    const sortedArr = sortTasksByDate({ sortingOrder: "desc", tasks });

    expect(sortedArr[0].id).toBe("3");
    expect(sortedArr[1].id).toBe("1");
    expect(sortedArr[2].id).toBe("2");
  });

  it("should NOT modify the original array", () => {
    sortTasksByDate({ sortingOrder: "asc", tasks });

    expect(tasks[0].id).toBe("1");
    expect(tasks[1].id).toBe("2");
    expect(tasks[2].id).toBe("3");
  });
});
