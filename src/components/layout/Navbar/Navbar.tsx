import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header className='border-b-2 border-(--color-dark-grey) px-[2.5%] h-20'>
      <nav className='flex justify-between h-20 items-center'>
        <Link to='/' className='font-bold text-5xl'>
          Taskify
        </Link>
        <Link
          to='/add'
          className='bg-(--color-btn-blue) px-8 py-2 rounded-4xl font-semibold text-lg'
        >
          New Task +
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
