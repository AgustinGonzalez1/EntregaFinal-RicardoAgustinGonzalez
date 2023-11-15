export const getProducts = async () => {
	try {
		const data = await fetch("http://localhost:3000//api/productos");
		const products = await data.json();
		return products;
	} catch (err) {
		console.log(err);
	}
};
