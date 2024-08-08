import { sveltekit } from "@sveltejs/kit/vite";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit(), viteBasicSslPlugin()],
	server: {
		port: 12101,
		host: true,
		https: true,
	},
});
