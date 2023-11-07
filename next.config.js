/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["placehold.co"],
		dangerouslyAllowSVG: true, // Habilita la carga de imágenes SVG
	},
};

module.exports = nextConfig;
