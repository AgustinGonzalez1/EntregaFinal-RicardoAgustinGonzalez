"use client";
import Image from "next/image";
import ItemCount from "./ItemCount";
import CompletePurchase from "./CompletePurchase";

import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const ProductDetailContainer = ({ product }) => {
	const [quantityAdded, setQuantityAdded] = useState(0);
	const { addToCart } = useCartContext();

	const onAddToCart = (quantity) => {
		addToCart(product, quantity);
	};

	return (
		<article className="flex justify-center">
			<div className="relative w-72 h-72">
				<Image
					layout="fill"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt={product.title}
					src={product.image}
					className="object-cover aspect-square"
				/>
			</div>
			<div className="w-1/3 p-4 bg-[#f8f8f8] flex flex-col justify-between">
				<div className="flex flex-col gap-1">
					<h3 className="text-2xl font-bold">{product.title}</h3>
					<p className="text-xl">${product.price}</p>
				</div>
				<div className="flex justify-center">
					{quantityAdded === 0 ? (
						<ItemCount stock={product.stock} setQuantityAdded={setQuantityAdded} initial={1} onAddToCart={onAddToCart} />
					) : (
						<CompletePurchase quantityAdded={quantityAdded} />
					)}
				</div>
			</div>
		</article>
	);
};
export default ProductDetailContainer;
