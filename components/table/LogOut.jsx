'use client';
import { useAuthContext } from '../context/AuthContext';
import { MdLogout } from 'react-icons/md';

const LogOut = () => {
  const { logOut } = useAuthContext();
  return (
    <button
      onClick={logOut}
      href='/admin/create'
      className='py-1 px-2 flex justify-center items-center gap-1 rounded-md hover:bg-red-900 bg-red-700 duration-300 ease-in-out text-white'
    >
      <MdLogout className='text-2xl' />
      Cerrar sesión
    </button>
  );
};
export default LogOut;
