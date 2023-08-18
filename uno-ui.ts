import type { UserShortcuts, Rule } from 'unocss';

// @unocss-include
const shortcuts: UserShortcuts<any> = {
	'code': `font-mono ws-break-spaces rounded-[6px] py-[.2rem] px-[.4rem] bg-[#eff1f3]`,
	// button
	'btn': `cursor-pointer select-none decoration-none outline-offset-3
	rounded-2 h-12 min-h-12 px-4 
	text-center text-sm font-600 font-button uppercase
	border-none bg-base-2 hover:bg-base-3 transition-150 
	hover:active:scale-[.96] focus:active:scale-[.96]`,
	'btn-neutral': 'text-white bg-neutral-9 hover:bg-neutral-9',
	//dropdown
	'dropdown': 'relative inline-block'
}

const utilColors = ['info', 'success', 'warning', 'danger']

for (const col of utilColors) {
	shortcuts[`btn-${col}`] = `text-${col}c bg-${col} hover:bg-${col} outline-${col}`
}

const rules: Rule<any>[] = [
	['font-mono', { 'font-family': 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace' }],
	[/^outline-offset-(\d+)$/, ([, d]) => ({ 'outline-offset': `${d}px` })],,
	['font-button', { 'font-family': 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji' }], // stolen from daisyui
]

// config hmr works now
// you have to set the configFile and ConfigDeps options in vite.config.ts UnoCSS
// i had the configDeps pointing at src/ while i moved the preset to root
// i was using @unocss/svelte-scoped/vite which doesen't have hmr implemented
// by adding // @unocss-include, i can get unocss intellisense here

const theme = {
	colors: {
		// colors yoinked from daisy-ui
		'info': 'rgb(58, 191, 248)',
		'success': 'rgb(54, 211, 153)',
		'warning': 'rgb(251, 189, 35)',
		'danger': 'rgb(248, 114, 114)',
		'infoc': 'rgb(0, 43, 61)',
		'successc': 'rgb(0, 51, 32)',
		'warningc': 'rgb(56, 40, 0)',
		'dangerc': 'rgb(71, 0, 0)',
		base: {
			content: 'hsl(0 3% 6%)',
			1: 'hsl(0 4% 91%)',
			2: 'hsl(0 4% 84%)',
			3: 'hsl(0 4% 77%)'
		},
		// colors from custom coolors.co palette.
		alpha: { /* cornsilk */
			DEFAULT: '#FEFAE0',
      1: "#FFFDF5",
      2: "#FEFCEB",
      3: "#FEFBE6",
      4: "#FEFAE0",
      5: "#F9E352",
      6: "#E3C607",
      7: "#BCA406",
      8: "#8A7904",
      9: "#635603"
		},
		bravo: { /* papaya whip */
			DEFAULT: '#FAEDCD',
      1: "#FDF8EC",
      2: "#FCF5E3",
      3: "#FBF0D5",
      4: "#FAEDCD",
      5: "#F3D486",
      6: "#EAB52E",
      7: "#C79514",
      8: "#906B0E",
      9: "#6B4F0B"
		},
		charlie: { /* bud / beige */
			DEFAULT: '#E9EDC9',
			1: "#F7F9EC",
      2: "#F1F4DD",
      3: "#EEF1D5",
      4: "#E9EDC9",
      5: "#D1DA90",
      6: "#B4C247",
      7: "#98A437",
      8: "#6A7326",
      9: "#4E541C"
		},
		delta: { /* spring / tea green */
			DEFAULT: '#CCD5AE',
			1: "#ECEFE1",
      2: "#E1E7D0",
      3: "#D7DEBF",
      4: "#CCD5AE",
      5: "#B7C48D",
      6: "#9BAD61",
      7: "#80904B",
      8: "#5F6B38",
      9: "#424A26"
		},
		echo: { /* fawn / buff */
			DEFAULT: '#D4A373',
			1: "#F1E0D0",
      2: "#E8CFB5",
      3: "#DFBA96",
      4: "#D4A373",
      5: "#CA8F53",
      6: "#BB7A3A",
      7: "#9C6630",
      8: "#6D4722",
      9: "#4E3318"
		}
	}
};

export const presetUnoUI = () => {
	return {
		name: 'presetUnoUI',
		shortcuts,
		rules,
		theme
	}
}

export default presetUnoUI;