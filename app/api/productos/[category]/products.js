export const getProducts = async (category) => {
	try {
		const data = await fetch(`http://localhost:3000/api/productos/${category}`, { cache: "no-cache" }).then((r) => r.json());

		return data;
	} catch (err) {
		console.log(err);
	}
};
