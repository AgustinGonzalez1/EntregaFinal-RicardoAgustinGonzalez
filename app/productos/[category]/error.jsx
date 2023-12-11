'use client';

import Button from '@/components/products/Button';
import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='w-52 mt-16 flex flex-col gap-5'>
        <h1 className='text-xl text-center'>Ha ocurrido un error</h1>
        <Button function1={reset} text1={'Intentar nuevamente'} />
      </div>
    </div>
  );
};
export default Error;
