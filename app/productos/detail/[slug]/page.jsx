import ProductDetailContainer from "@/components/products/ProductDetailContainer";

const page = ({ params }) => {
	return (
		<main className="flex items-center h-[calc(100vh-75px)]">
			<section className="container mx-auto">
				<ProductDetailContainer params={params} />
			</section>
		</main>
	);
};
export default page;
