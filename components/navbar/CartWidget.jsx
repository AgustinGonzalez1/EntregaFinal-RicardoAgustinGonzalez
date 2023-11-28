import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
	const { cart } = useCartContext();
	console.log(cart);
	return (
		<Link href="/cart">
			<div className="relative px-1">
				<FaShoppingCart className="text-3xl text-black hover:text-slate-600 duration-300 ease-in-out" />
				<span className="bg-red-600 rounded-full text-white w-4 h-4 absolute flex justify-center items-center text-xs top-[-2px] right-0">
					{cart.reduce((acc, prod) => acc + prod.quantity, 0)}
				</span>
			</div>
		</Link>
	);
};
export default CartWidget;
