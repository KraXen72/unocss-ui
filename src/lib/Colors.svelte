<script>
	const colorVariants = 9
	const colorNames = ['alpha','bravo','charlie','delta','echo']

</script>

{#each colorNames as colName}
	<div class="flex flex-col gap-y-2">
		{#each Array(colorVariants) as _, i}
			<div class="bg-{colName}-{i+1} rounded-md color-pill {i > 5 ? 'text-white' : 'text-black'}">{colName}-{i+1}</div>
		{/each}
	</div>
{/each}

<style uno-safelist>
	.color-pill {
		mix-blend-mode: luminosity;
	}
</style>