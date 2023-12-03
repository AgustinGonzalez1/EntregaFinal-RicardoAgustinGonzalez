import { getProducts } from "@/app/api/productos/[category]/products";
import Tabla from "@/components/table/Tabla";

const page = async () => {
	const products = await getProducts("todos");

	return (
		<main>
			<section className="container mx-auto">
				<div className="flex my-8 justify-between">
					<h2 className="text-3xl">Panel administrador</h2>
					<button className="py-1 px-2 flex justify-center rounded-md hover:bg-green-900 bg-green-700 duration-300 ease-in-out text-white">
						Agregar producto
					</button>
				</div>
				<div className="my-2">
					<h3 className="text-2xl">Listado de productos</h3>
				</div>
				<Tabla products={products} />
			</section>
		</main>
	);
};
export default page;
