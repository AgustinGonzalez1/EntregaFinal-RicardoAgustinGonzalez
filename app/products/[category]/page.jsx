import CardProduct from "@/components/products/CardProduct";
import { mockData } from "@/data/products";

const FilterProducts = ({ params }) => {
	const { category } = params;

	const data = category === "all" ? mockData : mockData.filter((item) => item.category === category);

	return (
		<section className="bg">
			<div className="container mx-auto">
				<h2 className="text-3xl text-center my-5">Productos</h2>
				<CardProduct data={data} />
			</div>
		</section>
	);
};
export default FilterProducts;
