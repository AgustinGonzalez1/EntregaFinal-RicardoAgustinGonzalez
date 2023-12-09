import Image from "next/image";

const CardCart = ({ product, deleteProduct }) => {
	return (
		<article className="flex justify-center">
			<div className="relative w-[70px] h-[70px}">
				<Image
					fill
					alt={product.title}
					src={product.image}
					className="object-cover"
					sizes="(max-width: 768px) 50vw, (max-width: 1024px) 75vw, 100vw"
				/>
			</div>
			<div className=" p-2 gap-2 w-80 bg-[#f8f8f8] flex flex-col justify-between">
				<h3 className="font-bold">{product.title}</h3>
				<p className="text-sm">Cantidad: {product.quantity}</p>
			</div>
			<div className=" p-2 gap-2 bg-[#f8f8f8] flex flex-col justify-between">
				<button className="hover:text-red-600 duration-300" onClick={() => deleteProduct(product.slug)}>
					Borrar
				</button>
				<p className="text-sm">${product.price * product.quantity}</p>
			</div>
		</article>
	);
};
export default CardCart;
