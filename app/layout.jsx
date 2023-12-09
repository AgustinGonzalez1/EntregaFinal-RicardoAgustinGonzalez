import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { CartContextProvider } from "@/components/context/CartContext";
import { AuthContextProvider } from "@/components/context/AuthContext";

export const metadata = {
	title: "CORONA",
	description:
		"En nuestra tienda, encontrarás una exquisita colección de joyas que reflejan la majestuosidad y elegancia dignas de una corona. Cada pieza ha sido cuidadosamente diseñada para realzar tu belleza y destacar tu estilo único.",
	icons: {
		icon: ["/favicon.ico?v=4"],
		apple: ["/apple-touch-icon.png?v=4"],
		shortcut: ["/apple-touch-icon.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthContextProvider>
					<CartContextProvider>
						<Navbar />
						{children}
					</CartContextProvider>
				</AuthContextProvider>
			</body>
		</html>
	);
}
