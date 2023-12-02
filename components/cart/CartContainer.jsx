"use client";

import { useCartContext } from "../context/CartContext";
import Button from "../products/Button";
import CardCart from "./CardCart";

const CartContainer = () => {
	const { cart, clear, deleteItem } = useCartContext();

	return (
		<div className="p-5 min-h-[calc(100vh-75px)] flex flex-col justify-between">
			<div className="flex flex-col gap-4 justify-between">
				<h1 className="text-3xl font-bold text-center">{cart.length > 0 ? "Carrito" : "No hay productos en el carrito"}</h1>

				{cart.length > 0 && cart.map((prod, key) => <CardCart key={key} product={prod} deleteProduct={deleteItem} />)}
			</div>
			{cart.length > 0 && (
				<div className="flex justify-between">
					<div>
						<Button function1={clear} text1="Vaciar carrito" />
					</div>

					<div className="flex pb-5 items-center gap-5">
						<div className="flex justify-center">
							<p className="text-xl">Total: $0</p>
						</div>
						<div className="flex justify-center">
							<Button text1="Terminar compra" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default CartContainer;
