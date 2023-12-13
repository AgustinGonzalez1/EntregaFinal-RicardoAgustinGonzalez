'use client';

import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import Button from '../products/Button';
import CardCart from './CardCart';
import { useForm } from 'react-hook-form';
import { db } from '@/firebase/config';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

const CartContainer = () => {
  const { cart, clear, deleteItem } = useCartContext();
  const [modalFinish, setModalFinish] = useState(false);
  const [modalPurchase, setModalPurchase] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setModalPurchase(true);
      setModalFinish(false);

      const buyer = {
        buyer: data,
        date: new Date(),
      };

      const items = cart.map((item) => {
        return {
          id: item.slug,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        };
      });

      const order = {
        buyer,
        items,
        total: cart.reduce((a, b) => a + b.price * b.quantity, 0),
      };

      const ordersRef = collection(db, 'orders');

      const response = await addDoc(ordersRef, order);

      setOrderId(response.id);

      cart.forEach((item) => {
        const productRef = doc(db, 'productos', item.slug);
        updateDoc(productRef, {
          stock: item.stock - item.quantity,
        });
      });

      clear();
      setValue('name', '');
      setValue('email', '');
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div className='p-5 min-h-[calc(100vh-75px)] flex flex-col justify-between'>
        <div className='flex flex-col gap-4 justify-between'>
          <h1 className='text-3xl font-bold text-center'>
            {cart.length > 0 ? 'Carrito' : 'No hay productos en el carrito'}
          </h1>

          {cart.length > 0 &&
            cart.map((prod, key) => (
              <CardCart key={key} product={prod} deleteProduct={deleteItem} />
            ))}
        </div>
        {cart.length > 0 && (
          <div className='flex justify-between'>
            <div>
              <Button function1={clear} text1='Vaciar carrito' />
            </div>

            <div className='flex pb-5 items-center gap-5'>
              <div className='flex justify-center'>
                <p className='text-xl'>
                  Total: ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}
                </p>
              </div>
              <div className='flex justify-center'>
                <Button
                  function1={() => setModalFinish(true)}
                  text1='Terminar compra'
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {modalFinish && (
        <div className='fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg z-50 w-80 flex flex-col'>
            <form action='' onSubmit={onSubmit} className='flex flex-col gap-2'>
              <input
                type='text'
                placeholder='Ingrese su Nombre'
                {...register('name', {
                  required: 'El campo nombre es requerido',
                })}
                className='border-2 border-gray-700 py-1 px-1 w-full'
              />

              <p className='text-red-500 h-6'>{errors.name?.message}</p>

              <input
                type='email'
                placeholder='Ingrese su Email'
                {...register('email', {
                  required: 'El campo email es requerido',
                })}
                className='border-2 border-gray-700 py-1 px-1 w-full'
              />

              <p className='text-red-500 h-6'>{errors.email?.message}</p>

              <button
                className='p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs'
                type='submit'
              >
                <span className='absolute bg-slate-600 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out'></span>
                Finalizar compra
                <span className='absolute bg-slate-600 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out'></span>
              </button>
            </form>
          </div>
        </div>
      )}

      {modalPurchase && (
        <div
          className='fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center'
          onClick={() => setModalPurchase(false)}
        >
          <div
            className='bg-white p-6 rounded-lg z-50 w-80 flex flex-col '
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-lg font-bold mb-4 text-center'>
              Gracias por tu compra
            </h2>
            <p className='text-gray-700 mb-4 font-bold text-center'>
              Tu pedido se ha realizado con éxito
            </p>

            {!orderId ? (
              <p className='text-gray-700 mb-4 font-bold text-center'>
                Por favor espere...
              </p>
            ) : (
              <p className='text-gray-700 mb-4 font-bold text-center'>
                El ID de tu pedido es: {orderId}
              </p>
            )}
            <div className='flex justify-center'>
              <Button
                function1={() => {
                  setModalPurchase(false);
                  setOrderId(null);
                }}
                text1='Continuar'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CartContainer;
