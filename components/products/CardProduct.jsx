'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartContext } from '../context/CartContext';

const CardProduct = ({ item }) => {
  const [updatedStock, setUpdatedStock] = useState(item.stock);
  const { cart } = useCartContext();

  useEffect(() => {
    const cartItem = cart.find((prod) => prod.slug === item.slug);
    const cartItemQuantity = cartItem ? cartItem.quantity : 0;
    const updatedStock = item.stock - cartItemQuantity;
    setUpdatedStock(updatedStock);
  }, [cart, item]);

  return (
    <div className=' hover:scale-105 flex sm:w-full w-[250px] flex-col overflow-hidden duration-200 card '>
      <Link href={`/productos/detail/${item.slug}`}>
        <div className=' bg-gradient-to-b from-[#865dff] to-[#e384ff]'>
          <Image
            priority
            width={250}
            height={250}
            src={item.image}
            alt={item.title}
            className='w-full'
          />
        </div>
        <div className='bg-[#f8f8f8] p-4 flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <p className='text-[10px] text-end'>{item.type}</p>
            <h3 className='text-xs font-bold'>{item.title}</h3>
            <p className='text-sm'>{item.brand}</p>
          </div>
          <div>
            {updatedStock > 0 ? (
              <p className='text-sm'>Stock: {updatedStock}</p>
            ) : (
              <p className='text-sm text-red-500'>Sin stock</p>
            )}
          </div>
          <div className=''>
            <p className='text-sm font-semibold'>${item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CardProduct;
