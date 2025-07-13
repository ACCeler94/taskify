import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../types/types";
import { changeSortingOrder } from "../filterSlice";

const SortMenu = () => {
  const direction = useSelector(
    (state: RootState) => state.filter.sortingOrder,
  );
  const dispatch = useDispatch();

  const handleSelect = (value: "asc" | "desc") => {
    if (direction !== value) dispatch(changeSortingOrder(value));
  };

  return (
    <div className="text-md flex items-center gap-2">
      <label htmlFor="sort" className="font-medium">
        Sorting:
      </label>
      <select
        id="sort"
        value={direction}
        onChange={(e) => handleSelect(e.target.value as "asc" | "desc")}
        className="cursor-pointer rounded-md bg-neutral-800 px-3 py-2 text-sm"
        aria-label="Sort direction"
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
};

export default SortMenu;
