"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductsLinks = ({ href, text }) => {
	const pathName = usePathname();
	return (
		<div>
			<li className="relative">
				<Link href={href} className={`sobre ${pathName === href && "activeSobre"}`}>
					{text}
				</Link>
			</li>
		</div>
	);
};
export default ProductsLinks;
