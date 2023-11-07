import Image from "next/image";

const CardProduct = ({ data }) => {
	return (
		<div className="flex flex-wrap justify-center gap-5">
			{data.map((item, key) => (
				<div key={key} className="flex w-[250px] flex-col overflow-hidden duration-200 card ">
					<div className=" bg-gradient-to-b from-[#865dff] to-[#e384ff]">
						<Image priority width={250} height={250} src={item.image} alt={item.title} className="w-full" />
					</div>
					<div className="bg-[#f8f8f8] p-8 flex flex-col gap-8">
						<div>
							<p className="text-[10px] text-end">{item.type}</p>
							<h3 className="text-lg font-bold">{item.title}</h3>
							<p className="text-sm">{item.brand}</p>
						</div>
						<div>
							{item.stock > 0 ? (
								<p className="text-sm">Stock: {item.stock}</p>
							) : (
								<p className="text-sm text-red-500">Sin stock</p>
							)}
						</div>
						<div className="flex justify-between">
							<p className="text-sm font-semibold capitalize">{item.category}</p>
							<p className="text-sm font-semibold">${item.price}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default CardProduct;
