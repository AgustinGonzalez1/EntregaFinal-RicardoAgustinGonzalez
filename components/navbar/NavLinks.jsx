import Link from "next/link";
import { usePathname } from "next/navigation";

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
