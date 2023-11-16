import SectionHomeContainer from "@/components/home/SectionHomeContainer";

export const metadata = {
	title: "CORONA - INICIO",
};

export default async function Home() {
	return (
		<main className="flex min-h-[calc(100vh-75px)] flex-col items-center justify-between">
			<h1 className="text-4xl font-bold mt-5">CORONA</h1>
			<SectionHomeContainer />
			<span></span>
		</main>
	);
}
