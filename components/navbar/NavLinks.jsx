import Link from "next/link";
import React from "react";

const NavLinks = ({ href, text }) => {
	return (
		<li>
			<Link href={href}>{text}</Link>
		</li>
	);
};

export default NavLinks;
