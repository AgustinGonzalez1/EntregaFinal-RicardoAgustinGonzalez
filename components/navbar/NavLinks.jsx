import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, text, set }) => {
	const pathName = usePathname();
	return (
		<li className="relative">
			<Link href={href} className={`sobre ${pathName === href && "activeSobre"}`} onClick={() => set(false)}>
				{text}
			</Link>
		</li>
	);
};

export default NavLinks;
