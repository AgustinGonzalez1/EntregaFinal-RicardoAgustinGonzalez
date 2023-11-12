import FormAdmin from "@/components/formAdmin/FormAdmin";

export const metadata = {
	title: "CORONA - ADMIN",
};

const page = () => {
	return (
		<main>
			<section className="container mx-auto h-[calc(100vh-75px)]">
				<div className="flex flex-col justify-center items-center h-full gap-10">
					<FormAdmin />
				</div>
			</section>
		</main>
	);
};

export default page;
