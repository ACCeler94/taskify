import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="back-button absolute top-4 left-4 cursor-pointer"
      aria-label="Go back"
      onClick={() => navigate(-1)}
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M16 4L8 12L16 20"
            stroke="#e0e0e0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default BackButton;
