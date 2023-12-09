import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const createProduct = async (data, file) => {
	const storageRef = ref(storage, data.slug);
	const fileSnapshot = await uploadBytes(storageRef, file);

	const downloadURL = await getDownloadURL(fileSnapshot.ref);

	const docRef = doc(db, "productos", data.slug);
	return await setDoc(docRef, { ...data, image: downloadURL })
		.then(() => {
			return "success";
		})
		.catch((err) => {
			return err;
		});
};
