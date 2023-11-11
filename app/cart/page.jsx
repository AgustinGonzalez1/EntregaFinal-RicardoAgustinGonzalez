import { mockData } from "@/data/products";
import Image from "next/image";

export const metadata = {
	title: "CORONA - CARRITO",
};

const Cart = () => {
	const product = mockData[0];

	return (
		<main>
			<section className="container mx-auto">
				<div className="flex pb-5 justify-between flex-col min-h-[calc(100vh-75px)]">
					<div className="flex flex-col gap-4 justify-between">
						<h1 className="text-3xl font-bold text-center">CARRITO</h1>
						<article className="flex justify-center">
							<div className="relative w-[70px] h-[70px}">
								<Image layout="fill" alt={product.title} src={product.image} className="object-cover" />
							</div>
							<div className=" p-2 gap-2 bg-[#f8f8f8] flex flex-col justify-between">
								<h3 className="font-bold">{product.title}</h3>
								<p className="text-sm">Cantidad: 1</p>
							</div>
							<div className=" p-2 gap-2 bg-[#f8f8f8] flex flex-col justify-between">
								<button className="hover:text-red-600 duration-300">Borrar</button>
								<p className="text-sm">${product.price}</p>
							</div>
						</article>
					</div>
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
