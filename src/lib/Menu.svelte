<script lang="ts">
	export let links: { title: string, link?: string }[] = []
	export let title: string = 'Title'
</script>

<details class="menu">
	<summary class="menu-title">
		{title}
	</summary>
	<ul class="menu-content">
		{#each links as link}
			<a class="menu-item" href={link.link ?? null}>{link.title}</a>
		{/each}
	</ul>
</details>