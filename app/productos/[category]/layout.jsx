"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
	const pathName = usePathname();
	return (
		<section>
			<nav className="container mx-auto p-2">
				<ul className="flex justify-center gap-5">
					<li className="relative">
						<Link href={"/productos/todos"} className={`sobre ${pathName === "/productos/todos" && "activeSobre"}`}>
							Todos
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/aros"} className={`sobre ${pathName === "/productos/aros" && "activeSobre"}`}>
							Aros
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/anillos"} className={`sobre ${pathName === "/productos/anillos" && "activeSobre"}`}>
							Anillos
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/collares"} className={`sobre ${pathName === "/productos/collares" && "activeSobre"}`}>
							Collares
						</Link>
					</li>
					<li className="relative">
						<Link href={"/productos/pulseras"} className={`sobre ${pathName === "/productos/pulseras" && "activeSobre"}`}>
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
