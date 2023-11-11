"use client";
import { mockData } from "@/data/products";
import Image from "next/image";
import { useState } from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";

const ProductTable = () => {
	const [data, setData] = useState(mockData);

	const handleEdit = (title) => {
		// Lógica para editar el producto
		console.log("Editar producto: " + title);
	};

	const handleDelete = (title) => {
		// Lógica para eliminar el producto
		setData(data.filter((product) => product.titulo !== title));
		console.log("Eliminar producto: " + title);
	};

	return (
		<table className="w-full">
			<thead className="text-left">
				<tr className="border-t-2">
					<th>Titulo</th>
					<th>Slug</th>
					<th>Tipo</th>
					<th>Precio</th>
					<th>Stock</th>
					<th>Imagen</th>
					<th>Panel</th>
				</tr>
			</thead>
			<tbody>
				{data.map((producto, key) => (
					<tr key={key} className="border-t-2 text-sm">
						<td>{producto.title}</td>
						<td>{producto.slug}</td>
						<td>{producto.type}</td>
						<td>${producto.price}</td>
						<td>{producto.stock}</td>
						<td>
							<Image width={40} height={40} alt={producto.title} src={producto.image} className="object-cover" />
						</td>
						<td className="flex flex-col gap-1">
							<button
								className="w-full py-1 flex justify-center rounded-md hover:bg-blue-900 bg-blue-700 duration-300 ease-in-out text-white"
								onClick={() => handleEdit(producto.title)}>
								<MdModeEditOutline />
							</button>
							<button
								className="w-full py-1 flex justify-center rounded-md hover:bg-red-900 bg-red-700 duration-300 ease-in-out text-white"
								onClick={() => handleDelete(producto.title)}>
								<MdDeleteOutline />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ProductTable;
