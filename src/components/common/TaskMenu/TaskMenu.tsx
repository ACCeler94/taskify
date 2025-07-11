import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteTask } from "../../features/tasks/tasksSlice";

const TaskMenuButton = ({ taskId }: { taskId: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();

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

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-neutral-700 hover:bg-neutral-500"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Open and close task menu"
      >
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#E0E0E0"
          className="bi bi-three-dots-vertical h-[1em]"
          stroke="#E0E0E0"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
          </g>
        </svg>
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="task-menu absolute top-10 right-0 w-40 rounded-md bg-neutral-800 shadow-md"
        >
          <ul className="py-2 text-[0.85em] text-white">
            <li className="task-menu__option">
              <Link
                to={`/${taskId}/edit`}
                className="block w-full px-4 py-2 hover:bg-neutral-700"
              >
                Edit
              </Link>
            </li>
            <li
              className="task-menu__option cursor-pointer px-4 py-2 text-red-500 hover:bg-neutral-700"
              onClick={() => dispatch(deleteTask(taskId))}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskMenuButton;
