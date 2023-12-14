'use client';

import { useForm } from 'react-hook-form';
import { useAuthContext } from '../context/AuthContext';

const FormAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await loginUser(data.email, data.password);

      if (!user) {
        setError('credentials', {
          type: 'custom',
          message: 'Email o contraseña incorrectos',
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col gap-4 p-10 border-2 border-gray-700'
    >
      <h3 className='text-xl font-bold'>Ingresar al panel de administración</h3>
      <input
        type='email'
        name=''
        id='email'
        className='border-2 border-gray-700 py-1 px-1'
        placeholder='Email'
        {...register('email', {
          required: 'El email es requerido',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'El email no es válido',
          },
        })}
      />
      <p className='text-red-500 text-sm'>{errors?.email?.message}</p>
      <input
        type='password'
        name=''
        id='password'
        className='border-2 border-gray-700 py-1 px-1'
        placeholder='●●●●●●●●●●'
        autoComplete='password'
        {...register('password', {
          required: 'El campo contraseña es requerido',
        })}
      />
      <p className='text-red-500 text-sm'>{errors?.password?.message}</p>
      <p className='text-red-500 text-sm'>{errors?.credentials?.message}</p>
      <button className='p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all border-gray-700 duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs'>
        <span className='absolute bg-gray-700 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out'></span>
        Ingresar
        <span className='absolute bg-gray-700 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out'></span>
      </button>

      <button
        type='button'
        onClick={() => registerUser(getValues('email'), getValues('password'))}
        className='p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all border-gray-700 duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs'
      >
        <span className='absolute bg-gray-700 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out'></span>
        Registrarse
        <span className='absolute bg-gray-700 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out'></span>
      </button>
      <button
        type='button'
        onClick={googleLogin}
        className='p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all border-gray-700 duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs'
      >
        <span className='absolute bg-gray-700 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out'></span>
        Ingresa con Google
        <span className='absolute bg-gray-700 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out'></span>
      </button>
    </form>
  );
};
export default FormAdmin;
