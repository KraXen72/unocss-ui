import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// import UnoCSS from '@unocss/svelte-scoped/vite'
// import transformerDirectives from '@unocss/transformer-directives';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS({
		configFile: './unocss.config.ts',
		configDeps: ['./uno-ui.ts'],
		// cssFileTransformers: [ transformerDirectives() ],
		// configOrPath: './unocss.config.ts',
	}), svelte()],
})
