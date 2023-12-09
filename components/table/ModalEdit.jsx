const ModalEdit = ({ data, setModalEdit, onSubmit, register }) => {
	return (
		<div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg z-50 w-80 flex flex-col ">
				<h2 className="text-lg font-bold mb-4 text-center">Editar producto</h2>
				<p className="text-gray-700 mb-4 font-bold text-center">{data.title}</p>
				<form action="" onSubmit={onSubmit}>
					<div className="mb-4">
						<input
							type="number"
							{...register("stock")}
							className="border-2 border-gray-700 py-1 px-1 w-full"
							placeholder="Stock"
						/>
					</div>
					<div className="mb-4">
						<input
							type="number"
							{...register("price")}
							className="border-2 border-gray-700 py-1 px-1 w-full"
							placeholder="Precio"
						/>
					</div>
					<div className="flex justify-between">
						<button className="hover:bg-blue-900 bg-blue-700 text-white px-4 py-2 rounded-md mr-2" type="submit">
							Editar
						</button>
						<button
							type="button"
							className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
							onClick={() => setModalEdit(false)}>
							Cancelar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ModalEdit;
