// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, presetIcons, presetWind, transformerDirectives } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte';
import { presetUnoUI } from './uno-ui';

// import transformerCompileClass from '@unocss/transformer-compile-class';

const safelist: string[] = ['text-white', 'text-black']

for (const color of ['alpha', 'bravo', 'charlie', 'delta', 'echo']) {
	safelist.push(`bg-${color}`)
	for (let i = 1; i < 10; i++) {
		safelist.push(`bg-${color}-${i}`)
	}
}
for (const color of ['info', 'success', 'warning', 'danger']) {
	safelist.push(`btn-${color}`)
	safelist.push(`input-${color}`)
}

export default defineConfig({
	safelist,
	extractors: [
		extractorSvelte(),
	],
	presets: [
		presetUno(),
		presetWind(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
			warn: true
		}),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
        sans: 'Roboto',
				poppins: 'Poppins',
				inter: 'Inter'
      },
		}),
		presetUnoUI()
	],
	transformers: [
		transformerDirectives()
	]
})