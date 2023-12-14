import Link from 'next/link';
import Tabla from '@/components/table/Tabla';

import LogOut from '@/components/table/LogOut';

const page = async () => {
  return (
    <main>
      <section className='container mx-auto'>
        <div className='flex my-8 justify-between mx-4 sm:mx-0'>
          <h2 className='sm:text-3xl text-lg'>Panel administrador</h2>
          <LogOut />
        </div>
        <div className='my-2 flex justify-between mx-4 sm:mx-0'>
          <h3 className='sm:text-2xl text-lg'>Listado de productos</h3>
          <Link
            href='/admin/create'
            className='py-1 px-2 flex justify-center rounded-md hover:bg-green-900 bg-green-700 duration-300 ease-in-out text-white'
          >
            Agregar producto
          </Link>
        </div>
        <Tabla />
      </section>
    </main>
  );
};

export default page;
