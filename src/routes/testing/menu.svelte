<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let menuOpen = true;
	let mounted = false;

	onMount(() => {
		menuOpen = false;
		mounted = true;
	});
</script>

<header>
	<div class="pt-72 container mx-auto">
		<h1>Navillus</h1>
		<label for="toggle">&#9776;</label>
	</div>

	<input id="toggle" type="checkbox" class="sr-only" class:js={mounted} bind:checked={menuOpen} />

	{#if menuOpen}
		<nav>
			<p>IM OPEN</p>>
		</nav>
	{/if}
</header>

<style>
	#toggle:not(.js) ~ nav {
		display: none;
	}

	#toggle:not(.js):checked ~ nav {
		display: block;
	}
</style>
