'use client';

import { useForm } from 'react-hook-form';
import { createProduct } from './create';
import Button from '../products/Button';
import { ToastContainer } from 'react-toastify';
import { notify } from '../ui/toast';
import Link from 'next/link';

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const newProduct = {
        ...data,
        type: data.category.charAt(0).toUpperCase() + data.category.slice(1),
        slug: data.title.toLowerCase().replaceAll(' ', '-'),
      };

      const res = await createProduct(newProduct, data.image[0]);
      if (res === 'success') {
        notify('Se ha creado el producto');
        setValue('title', '');
        setValue('price', '');
        setValue('stock', '');
        setValue('image', '');
        setValue('category', '');
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col gap-10 justify-center items-center min-h-[calc(100vh-75px)]'>
        <div className='flex justify-end w-full'>
          <Link
            href='/admin'
            className='py-1 px-2 flex justify-center rounded-md hover:bg-green-900 bg-green-700 duration-300 ease-in-out text-white'
          >
            Ir a la lista
          </Link>
        </div>
        <form
          action=''
          onSubmit={onSubmit}
          className='flex flex-col gap-1 p-10 border-2 border-gray-700'
        >
          <h3 className='text-xl font-bold'>Crear producto</h3>

          {/* Title */}

          <input
            type='text'
            name=''
            id='title'
            className='border-2 border-gray-700 py-1 px-1'
            placeholder='Titulo'
            {...register('title', {
              required: 'El campo title es requerido',
              pattern: {
                value: /^[A-Z\s]+$/,
                message: 'Solo se aceptan letras mayúsculas',
              },
            })}
          />
          <p className='text-red-500 text-sm'>{errors?.title?.message}</p>

          {/* Price */}

          <input
            type='number'
            name=''
            id='price'
            className='border-2 border-gray-700 py-1 px-1'
            placeholder='Precio'
            {...register('price', { required: 'El campo Precio es requerido' })}
          />
          <p className='text-red-500 text-sm'>{errors?.price?.message}</p>

          {/* Stock */}

          <input
            type='number'
            name=''
            id='stock'
            className='border-2 border-gray-700 py-1 px-1'
            placeholder='Stock'
            {...register('stock', { required: 'El campo Stock es requerido' })}
          />
          <p className='text-red-500 text-sm'>{errors?.stock?.message}</p>

          {/* Category */}

          <input
            type='text'
            name=''
            id='category'
            className='border-2 border-gray-700 py-1 px-1'
            placeholder='Categoría'
            {...register('category', {
              required: 'El campo Categoría es requerido',
              pattern: {
                value: /^[a-z]+$/,
                message: 'Solo se aceptan letras minúsculas',
              },
            })}
          />
          <p className='text-red-500 text-sm'>{errors?.category?.message}</p>

          {/* Image */}

          <input
            type='file'
            name=''
            id='image'
            className=' border-gray-700 cursor-pointer'
            {...register('image', { required: 'Se requiere una imagen' })}
          />
          <p className='text-red-500 text-sm'>{errors?.image?.message}</p>

          <Button text1={'Crear'} />
        </form>
      </div>
    </>
  );
};
export default CreateForm;
