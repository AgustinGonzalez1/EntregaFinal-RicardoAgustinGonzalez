/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["firebasestorage.googleapis.com"],
		dangerouslyAllowSVG: true, // Habilita la carga de imágenes SVG
	},
};

module.exports = nextConfig;
