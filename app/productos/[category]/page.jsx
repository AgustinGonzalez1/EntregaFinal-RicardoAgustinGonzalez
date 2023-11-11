import CardProduct from "@/components/products/CardProduct";
import { mockData } from "@/data/products";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: `CORONA - ${params.category.toUpperCase()}`,
	};
}

const FilterProducts = ({ params }) => {
	const { category } = params;

	const data = category === "todos" ? mockData : mockData.filter((item) => item.category === category);

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
