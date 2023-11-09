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
						<Link href={"/productos/todos"} className={`sobre ${pathName === "/productos/todos" && "text-red-600"}`}>
							Todos
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/aros"} className={`sobre ${pathName === "/productos/aros" && "text-red-600"}`}>
							Aros
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/anillos"} className={`sobre ${pathName === "/productos/anillos" && "text-red-600"}`}>
							Anillos
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/collares"} className={`sobre ${pathName === "/productos/collares" && "text-red-600"}`}>
							Collares
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/pulseras"} className={`sobre ${pathName === "/productos/pulseras" && "text-red-600"}`}>
							Pulseras
						</Link>
					</li>
				</ul>
			</nav>
			{children}
		</section>
	);
};
export default Layout;
