import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
	try {
		const { category } = params;

		const productsRef = collection(db, "productos");

		const q = category === "todos" ? query(productsRef) : query(productsRef, where("category", "==", category));

		const querySnapshot = await getDocs(q);

		const docs = querySnapshot.docs.map((doc) => doc.data());

		//Para agregar los productos a la base de datos
		/* 	mockData.forEach((product) => {
		const docRef = doc(db, "productos", product.slug);
		setDoc(docRef, product);
	}); */

		return NextResponse.json(docs);
	} catch (err) {
		console.log(err);
	}
}
