import debounce from "lodash.debounce";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../filterSlice";

const SearchBar = () => {
  // Use inputRef to focus on the input when clicking the svg icon
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(updateSearchQuery(value));
      }, 300),
    [dispatch],
  );

  // Clean up any ongoing debounces when the component unmounts
  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedDispatch(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="min-w-96 rounded-lg bg-neutral-800 p-3 pr-11 text-lg"
        aria-label="Filter tasks by keywords"
        placeholder="Filter tasks..."
        ref={inputRef}
        onChange={handleChange}
      />
      <svg
        width="28px"
        height="28px"
        viewBox="0 0 1024 1024"
        className="icon absolute right-1 cursor-text"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#b0b0b0"
        onClick={() => inputRef.current?.focus()}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
            fill="#b0b0b0"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default SearchBar;
