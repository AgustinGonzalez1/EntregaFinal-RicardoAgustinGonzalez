import VistaHome from "@/components/home/VistaHome";

export const metadata = {
	title: "CORONA - INICIO",
};

export default async function Home() {
	return (
		<main className="flex h-[calc(100vh-75px)] flex-col items-center justify-between pt-5">
			<h1 className="text-4xl font-bold">CORONA</h1>
			<section className="grid sm:grid-cols-2 gap-4 grid-cols-1">
				<VistaHome image={"/home/anillos.jpeg"} title={"anillos"} />
				<VistaHome image={"/home/aros.jpeg"} title={"aros"} />
				<VistaHome image={"/home/collares.jpeg"} title={"collares"} />
				<VistaHome image={"/home/pulseras.jpeg"} title={"pulseras"} />
			</section>
			<span></span>
		</main>
	);
}
