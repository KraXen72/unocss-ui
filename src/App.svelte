<script lang="ts">
	//   import svelteLogo from './assets/svelte.svg' // from /src/assets
	//   import viteLogo from '/vite.svg' // from /public

    import Colors from "./lib/Colors.svelte";
    import Menu from "./lib/Menu.svelte";

	const navLinks = [
		{ title: 'Product 1', link: 'https://google.com' },
		{ title: 'Product 2'}, 
		{ title: 'Product 3'}
	]
</script>

<main class="w-2xl mx-auto">
	<h1>unocss-ui</h1>
	opinionated ui library with unocss
	<ul class="text-left w-max break-words whitespace-normal">
		<li><b>Is it accessible?</b> Mostly. It tries to be, not the main concern. </li>
		<li><b>Is it styled?</b> Yes. You can change the colors in <code class="code">uno.config.css</code></li>
		<li> <b>is it animated?</b> Where it makes sense.</li> 
	</ul>
	
	<h2>colors - utility</h2>
	<blockquote>taken from <a href="https://daisyui.com">daisyui</a></blockquote>
	<div class="colors grid gap-x-2 gap-x-4 grid-cols-4">
		<div class="bg-info text-infoc font-bold rounded-md">info</div>
		<div class="bg-warning text-warningc font-bold rounded-md">warning</div>
		<div class="bg-success text-successc font-bold rounded-md">success</div>
		<div class="bg-danger text-dangerc font-bold rounded-md">danger</div>
	</div>
	
	<h2>colors - 5 primary colors</h2>
	<p>5 primary colors, by default filled by a forest pallette.</p>
	<p>Use <a href="http://www.tints.dev">tints.dev</a> to generate alternatives from your color palette (by Luminosity)</p>
	<div class="colors grid gap-2 grid-cols-5 gap-x-4">
		<div class="bg-alpha font-bold rounded-md">alpha</div>
		<div class="bg-bravo font-bold rounded-md">bravo</div>
		<div class="bg-charlie font-bold rounded-md">charlie</div>
		<div class="bg-delta font-bold rounded-md">delta</div>
		<div class="bg-echo font-bold rounded-md bg-">echo</div>
		<Colors/>
	</div>

	<h2>buttons</h2>
	<blockquote>mostly taken from <a href="https://daisyui.com">daisyui</a> with slight modifications</blockquote>
	<div class="flex gap-x-3 justify-center">
		<button class="btn">default</button>
		<button class="btn btn-neutral">neutral</button>
		<button class="btn btn-ghost">ghost</button>
		<button class="btn btn-info">info</button>
		<button class="btn btn-success">success</button>
		<button class="btn btn-warning">warning</button>
		<button class="btn btn-danger">danger</button>
	</div>
	<h3>button sizes</h3>
	<div class="flex gap-x-3 justify-center items-center">
		<button class="btn btn-lg">large</button>
		<button class="btn">normal</button>
		<button class="btn btn-wide">wide</button>
		<button class="btn btn-sm">small</button>
		<button class="btn btn-xs">tiny</button>
	</div>

	<h2>nav & dropdown</h2>
	<div class="nav">
		<button class="nav-link">Home</button>
		<div class="flex-grow-1"></div>
		<Menu links={navLinks} title={'Products'} />
		<button class="nav-link">Services</button>
		<button class="nav-link">About</button>
	</div>
	<div class="h-md"></div>
</main>

<style>

</style>
