import CartContainer from "@/components/cart/CartContainer";

export const metadata = {
	title: "CORONA - CARRITO",
};

const Cart = () => {
	return (
		<main>
			<section className="container mx-auto">
				<CartContainer />
			</section>
		</main>
	);
};

export default Cart;
