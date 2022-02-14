<script>
    import {companyName, statusBar } from '$stores';
	import { fade } from 'svelte/transition';

	let y;
	let show = true;

	$: {
	if (y < 70) {
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
		<meta in:fade={{ duration: 1000 }} name="theme-color" content="#e0cf9b">
	{/if}
</svelte:head>