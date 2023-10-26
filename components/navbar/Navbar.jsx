"use client";

import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-slate-800 py-5">
			<div className="container mx-auto flex justify-between">
				<div className="flex items-center">
					<h2 className="text-2xl text-white">MYA</h2>
				</div>
				<div>
					<ul className="flex gap-5 text-white">
						<li>
							<Link href={"/"}>Home</Link>
						</li>

						<li>
							<Link href={"/login"}>Login</Link>
						</li>
						<li>
							<Link href={"/register"}>Register</Link>
						</li>
						<li>
							<Link href={"/products"}>Products</Link>
						</li>
						<li>
							<Link href={"/cart"}>Cart</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
