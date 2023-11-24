import { getProduct } from "@/app/api/detail/[slug]/product";
import ProductDetailContainer from "@/components/products/ProductDetailContainer";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: `CORONA - ${params.slug}`,
	};
}

const page = async ({ params }) => {
	const { slug } = params;
	const product = await getProduct(slug);
	return (
		<main className="flex items-center h-[calc(100vh-75px)]">
			<section className="container mx-auto">
				<ProductDetailContainer product={product} />
			</section>
		</main>
	);
};
export default page;
