import Image from "next/image";

const SectionHome = ({ image, title }) => {
	return (
		<article className="md:w-96 w-64 h-64 overflow-hidden">
			<div className="relative w-full h-full hover:scale-110 duration-300 ease-in-out">
				<Image priority fill src={image} alt={title} className="object-cover " sizes="100%, 100%" />
				<span className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
					<p className="text-white text-2xl font-bold capitalize">{title}</p>
				</span>
			</div>
		</article>
	);
};
export default SectionHome;
