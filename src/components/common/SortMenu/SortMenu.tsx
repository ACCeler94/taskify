import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../types/types";
import { changeSortingOrder } from "../../features/filter/filterSlice";

const SortMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const direction = useSelector(
    (state: RootState) => state.filter.sortingOrder,
  );
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: "asc" | "desc") => {
    if (direction !== value) dispatch(changeSortingOrder(value));
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50 flex items-center gap-3">
      Sorting:
      <button
        ref={buttonRef}
        className="flex cursor-pointer items-center justify-center rounded-md bg-neutral-700 px-3 py-1 hover:bg-neutral-500"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        aria-label="Open and close sorting menu"
      >
        {direction === "asc" ? "ASC" : "DESC"}
      </button>
      {menuOpen && (
        <div
          ref={menuRef}
          className="sorting-menu absolute top-11 right-0 w-25 rounded-md bg-neutral-800 shadow-md"
        >
          <ul className="py-2 text-[0.85em] text-white">
            <li
              className="sorting-menu__option cursor-pointer px-4 py-2 hover:bg-neutral-700"
              onClick={() => handleSelect("asc")}
            >
              ASC
            </li>
            <li
              className="sorting-menu__option cursor-pointer px-4 py-2 hover:bg-neutral-700"
              onClick={() => handleSelect("desc")}
            >
              DESC
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortMenu;
