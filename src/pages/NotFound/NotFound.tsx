import BackButton from "../../components/common/BackButton/BackButton";

const NotFound = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4">
      <BackButton to="/" />
      <h2 className="text-6xl">404 not found...</h2>
    </main>
  );
};

export default NotFound;
