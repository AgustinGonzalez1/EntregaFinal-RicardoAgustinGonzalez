import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, text }) => {
	const pathName = usePathname();
	return (
		<li className="relative">
			<Link href={href} className={`sobre ${pathName === href && "activeSobre"}`}>
				{text}
			</Link>
		</li>
	);
};

export default NavLinks;
