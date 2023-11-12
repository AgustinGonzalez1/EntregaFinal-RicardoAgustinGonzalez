"use client";
import Button from "../products/Button";

const FormAdmin = () => {
	return (
		<form action="" className="flex flex-col gap-4 p-10 border-2 border-gray-700">
			<h3 className="text-xl font-bold">Ingresar al panel de administración</h3>
			<input type="email" name="" id="email" className="border-2 border-gray-700 py-1 px-1" placeholder="Email" />
			<input type="password" name="" id="password" className="border-2 border-gray-700 py-1 px-1" placeholder="●●●●●●●●●●" />
			<Button text1={"Ingresar"} function1={() => console.log(ingresar)} />
		</form>
	);
};
export default FormAdmin;
