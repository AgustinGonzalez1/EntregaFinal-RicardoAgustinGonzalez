import CartContainer from "@/components/cart/CartContainer";

export const metadata = {
	title: "CORONA - CARRITO",
};

const Cart = () => {
	return (
		<main>
			<section className="container mx-auto">
				<CartContainer />
				<div className="flex pb-5 justify-between flex-col min-h-[calc(100vh-75px)]">
					<div className="flex justify-center">
						<button className="p-2 border-2 relative bg-transparent z-[2] button group transition-all duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs">
							<span className="absolute bg-slate-600 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
							Terminar compra
							<span className="absolute bg-slate-600 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Cart;
