import ProductsLinksContainer from "@/components/products/ProductsLinksContainer";

const Layout = ({ children }) => {
	return (
		<section>
			<div className="container mx-auto">
				<nav className="p-2">
					<ProductsLinksContainer />
				</nav>
				{children}
			</div>
		</section>
	);
};
export default Layout;
