import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

export async function GET(request, { params }) {
	const { category } = params;

	const productsFiltered = category === "todos" ? mockData : mockData.filter((item) => item.category === category);

	return NextResponse.json(productsFiltered);
}
