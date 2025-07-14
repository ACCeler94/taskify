import { describe, it, expect } from "vitest";
import filterReducer, {
  changeSortingOrder,
  initialState,
  updateSearchQuery,
} from "../../../../src/components/features/filter/filterSlice";

describe("filterSlice reducers", () => {
  it("should return the initial state if no action is passed", () => {
    expect(filterReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle updateSearchQuery", () => {
    const newQuery = "find this task";

    const actualState = filterReducer(
      initialState,
      updateSearchQuery(newQuery),
    );

    expect(actualState.query).toBe(newQuery);
    expect(actualState.sortingOrder).toBe(initialState.sortingOrder); // Check if other field remained unchanged
  });

  it("should handle changeSortingOrder to 'desc'", () => {
    const newOrder = "desc";

    const actualState = filterReducer(
      initialState,
      changeSortingOrder(newOrder),
    );

    expect(actualState.sortingOrder).toBe(newOrder);
    expect(actualState.query).toBe(initialState.query);
  });

  it("should handle changeSortingOrder back to 'asc'", () => {
    const startState = {
      ...initialState,
      sortingOrder: "desc" as "asc" | "desc",
    };
    const newOrder = "asc";

    const actualState = filterReducer(startState, changeSortingOrder(newOrder));

    expect(actualState.sortingOrder).toBe(newOrder);
  });
});
