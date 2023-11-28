import { getProducts } from "@/app/api/productos/[category]/products";
import CardProduct from "@/components/products/CardProduct";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: `CORONA - ${params.category.toUpperCase()}`,
	};
}

export function generateStaticParams() {
	return [
		{ category: "todos" },
		{ category: "aros" },
		{ category: "anillos" },
		{ category: "collares" },
		{ category: "pulseras" },
	];
}

export const revalidate = 3600;

const FilterProducts = async ({ params }) => {
	const { category } = params;

	const data = await getProducts(category);

	const title = category === "todos" ? "Todos los productos" : category;

	return (
		<section className="bg">
			<div className="container mx-auto">
				<h2 className={`text-3xl text-center my-5 ${category !== "todos" ? "capitalize" : ""}`}>{title}</h2>
				<CardProduct data={data} />
			</div>
		</section>
	);
};
export default FilterProducts;
