import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

export async function GET(request, { params }) {
	const { slug } = params;

	const product = mockData.find((product) => product.slug === slug);

	return NextResponse.json(product);
}
