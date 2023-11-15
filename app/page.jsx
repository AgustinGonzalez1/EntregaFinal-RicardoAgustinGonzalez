import SectionHome from "@/components/home/SectionHome";

export const metadata = {
	title: "CORONA - INICIO",
};

export default async function Home() {
	return (
		<main className="flex h-[calc(100vh-75px)] flex-col items-center justify-between">
			<h1 className="text-4xl font-bold">CORONA</h1>
			<section className="grid sm:grid-cols-2 gap-4 my-5 grid-cols-1">
				<SectionHome image={"/home/anillos.jpeg"} title={"anillos"} />
				<SectionHome image={"/home/aros.jpeg"} title={"aros"} />
				<SectionHome image={"/home/collares.jpeg"} title={"collares"} />
				<SectionHome image={"/home/pulseras.jpeg"} title={"pulseras"} />
			</section>
			<span></span>
		</main>
	);
}
