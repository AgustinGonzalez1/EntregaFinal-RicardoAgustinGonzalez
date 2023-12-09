"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { db } from "@/firebase/config";
import { ToastContainer } from "react-toastify";
import { collection, onSnapshot } from "firebase/firestore";
import { useForm } from "react-hook-form";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { notify } from "../ui/toast";
import { deleteProduct, modifyProduct } from "./editAndDelete";

const ProductTable = ({ products }) => {
	const [data, setData] = useState({});
	const [modalDelete, setModalDelete] = useState(false);
	const [snapData, setSnapData] = useState(products);
	const [modalEdit, setModalEdit] = useState(false);

	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit(async (inputs) => {
		try {
			await modifyProduct(data, inputs);
			setModalEdit(false);
			setData({});
			notify("Producto actualizado!");
		} catch (err) {
			console.log(err);
		}
	});

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, "productos"), (snapshot) => {
			const updatedData = snapshot.docs.map((doc) => doc.data());
			setSnapData(updatedData);
		});

		return () => unsubscribe();
	}, []);

	const handleEdit = (product) => {
		setModalEdit(true);
		setData(product);
	};

	const handleDelete = (product) => {
		setModalDelete(true);
		setData(product);
	};

	const confirmDelete = async () => {
		try {
			await deleteProduct(data);
			setModalDelete(false);
			setData({});
			notify("Producto eliminado!");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<ToastContainer />
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
					{snapData.map((producto, key) => (
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
									onClick={() => handleEdit(producto)}>
									<MdModeEditOutline />
								</button>
								<button
									className="w-full py-1 flex justify-center rounded-md hover:bg-red-900 bg-red-700 duration-300 ease-in-out text-white"
									onClick={() => handleDelete(producto)}>
									<MdDeleteOutline />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{modalDelete && <ModalDelete data={data} setModalDelete={setModalDelete} confirmDelete={confirmDelete} />}

			{modalEdit && <ModalEdit data={data} setModalEdit={setModalEdit} onSubmit={onSubmit} register={register} />}
		</>
	);
};

export default ProductTable;
