"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
	const pathName = usePathname();
	return (
		<section>
			<nav>
				<ul>
					<li className="relative">
						<Link href={"/products/all"} className={`sobre ${pathName === "/products/all" && "text-red-600"}`}>
							Todos
						</Link>
					</li>
					<li className="relative">
						<Link href={"/products/cremas"} className={`sobre ${pathName === "/products/cremas" && "text-red-600"}`}>
							Cremas
						</Link>
					</li>
					<li className="relative">
						<Link href={"/products/shampoo"} className={`sobre ${pathName === "/products/shampoo" && "text-red-600"}`}>
							Shampoo
						</Link>
					</li>
				</ul>
			</nav>
			{children}
		</section>
	);
};
export default Layout;
