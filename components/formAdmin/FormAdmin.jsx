"use client";

const FormAdmin = () => {
	console.log("asd");
	return (
		<form action="" className="flex flex-col gap-4 p-10 border-2 border-gray-700">
			<h3 className="text-xl font-bold">Ingresar al panel de administración</h3>
			<input type="email" name="" id="email" className="border-2 border-gray-700 py-1 px-1" placeholder="Email" />
			<input type="password" name="" id="password" className="border-2 border-gray-700 py-1 px-1" placeholder="●●●●●●●●●●" />
			<button
				className="p-2 border-2 w-full relative bg-transparent z-[2] button group transition-all border-gray-700 duration-300 ease-in-out border-oscuro1 hover:text-white md:text-sm text-xs"
				onClick={(e) => {
					e.preventDefault();
					console.log("ingresar");
				}}>
				<span className="absolute bg-gray-700 h-full w-0 top-0 left-0 z-[-1] button-span1 group-hover:w-1/2 duration-300 ease-in-out"></span>
				Ingresar
				<span className="absolute bg-gray-700 h-full w-0 top-0 right-0 z-[-1] button-span2 group-hover:w-1/2 duration-300 ease-in-out"></span>
			</button>
		</form>
	);
};
export default FormAdmin;
