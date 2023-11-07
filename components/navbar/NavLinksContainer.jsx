"use client";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

const NavLinksContainer = () => {
	const [classes, setClasses] = useState(false);
	const addClasses = () => {
		setClasses(!classes);
	};
	const show = classes ? "h-[calc(100vh-76px)]" : "";

	return (
		<div className="flex">
			<Hamburger addClasses={addClasses} classes={classes} />
			<ul
				className={`h-0 bg-slate-800 ease-in-out duration-300 flex items-center absolute md:static w-full md:w-auto justify-center flex-col md:flex-row overflow-hidden top-[76px] left-[0px] gap-5 text-white md:h-auto ${show}`}>
				<NavLinks href={"/"} text={"Inicio"} set={setClasses} />
				<NavLinks href={"/products/all"} text={"Products"} set={setClasses} />
				<NavLinks href={"/cart"} text={"Cart"} set={setClasses} />
			</ul>
		</div>
	);
};
export default NavLinksContainer;