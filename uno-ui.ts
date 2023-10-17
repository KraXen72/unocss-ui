import type { UserShortcuts, Rule } from 'unocss';

// @unocss-include

// internal shortcuts
const btnSizing = `rounded-2 h-12 min-h-12 px-4`;
const btnReset = `
	cursor-pointer select-none decoration-none outline-offset-3 outline-neutral-6
	transition-150 text-center
`
const btnBase = `
	${btnReset}
	text-sm font-600 uppercase
	border-none bg-base-2 hover:bg-base-3  
`

const shortcuts: UserShortcuts<any> = {
	'btn-base': btnBase,
	'btn-reset': btnReset,
	'btn': `${btnBase} ${btnSizing} font-button btn-click-animate`,

	// btn variants
	'btn-static': `${btnBase} ${btnSizing}`, // no click animation
	'btn-neutral': `text-white bg-neutral-9 hover:bg-neutral-9`,
	'btn-ghost': 'bg-transparent hover:bg-base-1',
	'btn-sm': 'h-8 min-h-8 px-3 font-size-3.5',
	'btn-sm2': 'h-8 min-h-8 px-3 font-size-[.9375rem]',
	'btn-xs': 'h-6 min-h-6 px-2 font-size-3',

	// btn modifiers
	'btn-border': 'border-solid border-1 border-neutral-3',
	'btn-click-animate': 'active:scale-[.97]',
	'btn-wide': 'w-64',
	'btn-square': 'aspect-square !p0', // figure out how to remove the !important
	
	// button / button-related components
	'inline-rect-tag': `btn-reset btn-sm btn-border bg-base-1 py-2 rounded-1 flex items-center gap-x-1.5 text-black/80`,
	'inline-btn': `inline-rect-tag hover:bg-base-2 active:scale-[.97]`,
	'icon-btn': `rounded-full aspect-square bg-image-bg hover:bg-white/17 focus:bg-white/17 transition-colors backdrop-blur-sm border-solid border-1 border-neutral-3/20`,
	
	// styling placeholder, text & colors only
	'input-inner': `font-medium font-size-4 leading-normal 
	placeholder:font-medium placeholder:opacity-65 placeholder:text-[#5F5F5F]`,
	'input-outer-static': `h-12 rounded-2 px-4 py-[3.5px] bg-white
	bord border-base-text/30`,
	'input-outer': `input-outer-static hover:border-base-text/50
	focus:outline-none focus-within:border-focus hover:focus-within:border-focus`, 
	'input': `input-inner input-outer`,

	'input-md': 'h-9 min-h-9 px-3 font-size-3.5',
	'label': 'select-none py-2 px-1 flex justify-between',
	
	'nav': 'flex gap-x-2 rounded-md p-2 w-full max-w-screen',
	'nav-link': `${btnBase} ${btnSizing} bg-transparent hover:bg-base-1 
	active:hover:bg-base-2 active:focus:bg-base-2
	outline-offset-0 outline-neutral-6 font-button
	inline-flex items-center color-initial`,
	'selected-nav': 'underline underline-offset-2 underline-2 decoration-primary',
	
	'menu': '[&[open]>summary::after]:i-lucide-chevron-up',
	'menu-title': `nav-link h-full my-auto inline-flex items-center px-2 
	after:content-empty after:inline-block
	after:i-lucide-chevron-down after:ml-1`,
	'menu-content': `list-none absolute z-1 my-0 mt-3 p-2
	flex flex-col gap-y-2 rounded-2 min-w-23
	bg-base-1`,
	'menu-item': `nav-link rounded-1 btn-sm2 bg-white hover:bg-base-2 active:focus:bg-base-3 active:hover:bg-base-3 
	text-left leading-[2rem] normal-case text-inherit`,
	'menu-separator': `mx-1 my-[.15rem] w-[calc(100%-.5rem)] bg-transparent border-none border-b-solid border-base-text/55`,
	
	'img-card-title': `font-size-[1.125rem] leading-tight my0 font-medium text-image-title tracking-tight`, // leading-[1.875rem] no my
	'img-card-subtitle': `font-size-4 leading-tight font-normal text-image-subtitle tracking-tight
	my0`,
	'date-pill': `px-2 py-1 rounded-[6px] border-solid border-1 border-neutral-3/20
	font-medium font-size-3.5 leading-none text-image-title bg-image-bg backdrop-blur-sm`,
	
	'tag-pill': `flex w-max rounded-1.5 bord border-base-text/30 h-min px2 py1.5`,
	'tag-pill-inner': `font-medium font-size-3.5 leading-none`, // text-base-subtext
	
	'mobile-tab': 'btn-static btn-ghost flex-center w-full',
	'tab-selected': '!bg-base-2',

	'card': `p-6 bg-base-1 border-solid border-1 border-neutral-3 rounded-3`,
	
	//utils
	'reset-link': 'text-inherit decoration-none inline-flex items-center',
	'flex-center': 'flex justify-center items-center',
	'coverarea': 'w-full h-full',
	'bord': 'border-solid border-1'
}

const utilColors = ['info', 'success', 'warning', 'danger']
for (const col of utilColors) {
	shortcuts[`btn-${col}`] = `text-${col}c bg-${col} hover:bg-${col} outline-${col}/65`;
	// shortcuts[`input-${col}`] = `border-${col} outline-${col}/50 border-2 border-solid outline-offset-2 placeholder:text-${col}c/50`;
}

const rules: Rule<any>[] = [
	['font-mono', { 'font-family': 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace' }],
	[
		/^outline-offset-(\d+)$/,
		([, d]) => ({ 'outline-offset': `${d}px` }), 
		{ autocomplete: 'outline-offset-<num>' }
	],
	['font-button', { 'font-family': 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji' }], // stolen from daisyui
	['font-system', { 'font-family': 'system-ui, sans-serif' }]
]

// config hmr works now
// - you have to set the configFile and ConfigDeps options in vite.config.ts UnoCSS
// - by adding // @unocss-include, i can get unocss intellisense here
// i had the configDeps pointing at src/ while i moved the preset to root
// i was using @unocss/svelte-scoped/vite which doesen't have hmr implemented

// currently broken
// shortcuts registered after extension loads work but don't have autocomplete (maybe? idk)
// windi css (semi-abmiguously) defines a bunch of state variants, so shorcuts like link-reset won't work, because of that
// - see: https://windicss.org/utilities/general/variants.html#pseudo-classes

// https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants

const theme = {
	colors: {
		primary: "#6d5dca",
		// colors yoinked from daisy-ui
		info: 'rgb(58, 191, 248)',
		success: 'rgb(54, 211, 153)',
		warning: 'rgb(251, 189, 35)',
		danger: 'rgb(248, 114, 114)',
		infoc: 'rgb(0, 43, 61)',
		successc: 'rgb(0, 51, 32)',
		warningc: 'rgb(56, 40, 0)',
		dangerc: 'rgb(71, 0, 0)',

		focus: '#006FE8', // blue, from svelte-select
		// initially yoinked from daisy-ui but edited
		base: {
			text: 'rgb(31, 35, 40)', // also used in app.css
			subtext: 'rgba(97, 97, 97, 0.87)', // secondary, tags
			border: 'hsl(0 0% 50%)',
			separator: 'hsl(0 0% 84%)',

			// from daisy-ui, modified
			content: 'hsl(0 3% 6%)', 
			1: 'hsl(0 4% 95%)', // l was 91%
			2: 'hsl(0 4% 90%)', // l was 84%
			3: 'hsl(0 4% 82%)' // l was 77%

			// surface: 'rgb(220, 220, 222)', // tag pills bg (old)
		},
		// on-image
		image: {
			title: "rgba(255, 255, 255, 0.87)",
			subtitle: "rgba(205, 205, 205, 0.87)",
			bg: 'rgba(255, 255, 255, 0.12)'
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
	},
	breakpoints: {
		'2xs': '375px', // thinnest supported mobile
		xs: '415px', // mobile
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px'
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