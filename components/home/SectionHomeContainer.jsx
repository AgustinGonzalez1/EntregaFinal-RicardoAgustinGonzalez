import SectionHome from "./SectionHome";

const SectionHomeContainer = () => {
	return (
		<section className="grid sm:grid-cols-2 gap-4 grid-cols-1 my-5">
			<SectionHome image={"/home/anillos.jpeg"} title={"anillos"} url={"/productos/anillos"} />
			<SectionHome image={"/home/aros.jpeg"} title={"aros"} url={"/productos/aros"} />
			<SectionHome image={"/home/collares.jpeg"} title={"collares"} url={"/productos/collares"} />
			<SectionHome image={"/home/pulseras.jpeg"} title={"pulseras"} url={"/productos/pulseras"} />
		</section>
	);
};
export default SectionHomeContainer;
