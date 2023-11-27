import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
	try {
		const { slug } = params;

		const docRef = doc(db, "productos", slug);
		const docSnap = await getDoc(docRef);

		const product = docSnap.data();

		return NextResponse.json(product);
	} catch (err) {
		console.log(err);
	}
}
