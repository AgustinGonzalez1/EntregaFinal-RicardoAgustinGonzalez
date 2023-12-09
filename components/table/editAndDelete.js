import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export const deleteProduct = async (product) => {
	try {
		const productRef = doc(db, "productos", product.slug);
		await deleteDoc(productRef);
	} catch (err) {
		console.log(err);
	}
};

export const modifyProduct = async (product, inputs) => {
	try {
		const productRef = doc(db, "productos", product.slug);
		await updateDoc(productRef, {
			stock: parseInt(inputs.stock ? inputs.stock : product.stock),
			price: parseInt(inputs.price ? inputs.price : product.price),
		});
	} catch (err) {
		console.log(err);
	}
};
