<script lang="ts">
	//   import svelteLogo from './assets/svelte.svg' // from /src/assets
	//   import viteLogo from '/vite.svg' // from /public

    import Colors from "./lib/Colors.svelte";

</script>

<main class="w-2xl mx-auto">
	<h1>unocss-ui</h1>
	opinionated ui library with unocss
	<ul class="text-left w-max">
		<li><b>Is it accessible?</b> Mostly. It tries to be, not the main concern. </li>
		<li><b>Is it styled?</b> Yes. You can change the colors in <code class="code">uno.config.css</code></li>
		<li> <b>is it animated?</b> Where it makes sense.</li>
	</ul>

	<h2>colors - utility</h2>
	<div class="colors grid gap-x-2 gap-x-4 grid-cols-4">
		<div class="bg-info text-infoc font-bold rounded-md">info</div>
		<div class="bg-warning text-warningc font-bold rounded-md">warning</div>
		<div class="bg-success text-successc font-bold rounded-md">success</div>
		<div class="bg-danger text-dangerc font-bold rounded-md">danger</div>
	</div>

	<h2>colors - 5 primary colors</h2>
	<div class="colors grid gap-2 grid-cols-5 gap-x-4">
		<div class="bg-alpha font-bold rounded-md">alpha</div>
		<div class="bg-bravo font-bold rounded-md">bravo</div>
		<div class="bg-charlie font-bold rounded-md">charlie</div>
		<div class="bg-delta font-bold rounded-md">delta</div>
		<div class="bg-echo font-bold rounded-md bg-">echo</div>
		<Colors/>
	</div>

	<h2>buttons</h2>
	<div class="flex gap-x-3 justify-center">
		<button class="btn">default</button>
		<button class="btn btn-neutral">neutral</button>
		<button class="btn btn-info">info</button>
		<button class="btn btn-success">success</button>
		<button class="btn btn-warning">warning</button>
		<button class="btn btn-danger">danger</button>
	</div>
</main>

<style>

</style>
