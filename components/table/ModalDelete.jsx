const ModalDelete = ({ data, setModalDelete, confirmDelete }) => {
	return (
		<div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg ">
				<h2 className="text-lg font-bold mb-4">¿Deseas eliminar este producto?</h2>
				<p className="text-gray-700 mb-4 font-bold text-center">{data.title}</p>
				<div className="flex justify-between">
					<button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md mr-2" onClick={confirmDelete}>
						Eliminar
					</button>
					<button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md" onClick={() => setModalDelete(false)}>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
};
export default ModalDelete;
