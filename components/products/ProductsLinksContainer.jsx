import ProductsLinks from "./ProductsLinks";

const ProductsLinksContainer = () => {
	return (
		<ul className="flex justify-center gap-5">
			<ProductsLinks href={"/productos/todos"} text={"Todos"} />
			<ProductsLinks href={"/productos/aros"} text={"Aros"} />
			<ProductsLinks href={"/productos/anillos"} text={"Anillos"} />
			<ProductsLinks href={"/productos/collares"} text={"Collares"} />
			<ProductsLinks href={"/productos/pulseras"} text={"Pulseras"} />
		</ul>
	);
};
export default ProductsLinksContainer;
