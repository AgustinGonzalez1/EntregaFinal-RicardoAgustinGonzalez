import Image from "next/image";
import NavLinksContainer from "./NavLinksContainer";

const Navbar = () => {
	return (
		<nav className="bg-slate-800 py-2 px-5">
			<div className="container mx-auto flex justify-between">
				<div className="flex items-center">
					<Image src="/icon.png" alt="icon" width={96} height={60} priority={true} />
				</div>
				<NavLinksContainer />
			</div>
		</nav>
	);
};

export default Navbar;
