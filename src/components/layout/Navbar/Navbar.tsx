import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="h-20 border-b-2 border-(--color-dark-grey) px-[2.5%]">
      <nav className="flex h-20 items-center justify-between">
        <Link to="/" className="text-5xl font-bold">
          Taskify
        </Link>
        <Link
          to="/add"
          className="rounded-4xl bg-(--color-btn-blue) px-8 py-2 text-lg font-semibold"
        >
          New Task +
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
