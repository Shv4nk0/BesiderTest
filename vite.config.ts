import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/nyt": {
				target: "https://api.nytimes.com",
				changeOrigin: true,
				rewrite: (p) => p.replace(/^\/nyt/, ""),
			},
		},
	},
});
