"use client";

import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const createProduct = async (data) => {
	const docRef = doc(db, "productos", data.slug);
	return await setDoc(docRef, { ...data }).then(() => console.log("success"));
};

const CreateForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		try {
			const newProduct = {
				...data,
				type: data.category.charAt(0).toUpperCase() + data.category.slice(1),
				slug: data.title.toLowerCase().replaceAll(" ", "-"),
			};

			await createProduct(newProduct);
		} catch (err) {
			console.log(err);
		}
	});

	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-75px)]">
			<form action="" onSubmit={onSubmit} className="flex flex-col gap-1 p-10 border-2 border-gray-700">
				<h3 className="text-xl font-bold">Crear producto</h3>

				{/* Title */}

				<input
					type="text"
					name=""
					id="title"
					className="border-2 border-gray-700 py-1 px-1"
					placeholder="Titulo"
					{...register("title", { required: "El campo title es requerido" })}
				/>
				<p className="text-red-500 text-sm">{errors?.title?.message}</p>

				{/* Price */}

				<input
					type="number"
					name=""
					id="price"
					className="border-2 border-gray-700 py-1 px-1"
					placeholder="Precio"
					{...register("price", { required: "El campo Precio es requerido" })}
				/>
				<p className="text-red-500 text-sm">{errors?.price?.message}</p>

				{/* Stock */}

				<input
					type="number"
					name=""
					id="stock"
					className="border-2 border-gray-700 py-1 px-1"
					placeholder="Stock"
					{...register("stock", { required: "El campo Stock es requerido" })}
				/>
				<p className="text-red-500 text-sm">{errors?.stock?.message}</p>

				{/* Category */}

				<input
					type="text"
					name=""
					id="category"
					className="border-2 border-gray-700 py-1 px-1"
					placeholder="Categoría"
					{...register("category", { required: "El campo Categoría es requerido" })}
				/>
				<p className="text-red-500 text-sm">{errors?.category?.message}</p>

				<button className="p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all border-gray-700 duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs">
					<span className="absolute bg-gray-700 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
					Crear
					<span className="absolute bg-gray-700 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
				</button>
			</form>
		</div>
	);
};
export default CreateForm;
