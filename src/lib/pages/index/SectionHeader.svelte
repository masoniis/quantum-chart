<script>
    import {companyName, statusBar } from '$stores';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	const opactiy = tweened(0);

	let y;
	let show = true;

	$: {
	if (y < 60) {
		show = true;
		console.log("Show set true")
	} else {
		show = false;
		console.log("Show set to false")
	}
}
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Home - {$companyName}</title>
	<meta
		name="description"
		content="{$companyName} home page, make beautiful charts in the blink of an eye."
	/>

	{#if show}
		<meta in:fade={{ duration: 1000 }} out:fade={{duration: 1000}} name="theme-color" content="hsla(45, 53%, 74%, 50%)">
	{/if}
</svelte:head>