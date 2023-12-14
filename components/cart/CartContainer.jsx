'use client';

import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import Button from '../products/Button';
import CardCart from './CardCart';
import { useForm } from 'react-hook-form';
import { db } from '@/firebase/config';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import ModalFinish from './ModalFinish';
import ModalThanks from './ModalThanks';

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

            <div className='flex pb-5 items-center gap-1'>
              <div className='flex justify-center'>
                <p className='md:text-xl text-sm'>
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
        <ModalFinish
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          setModalFinish={setModalFinish}
        />
      )}

      {modalPurchase && (
        <ModalThanks
          orderId={orderId}
          setModalPurchase={setModalPurchase}
          setOrderId={setOrderId}
        />
      )}
    </>
  );
};
export default CartContainer;
