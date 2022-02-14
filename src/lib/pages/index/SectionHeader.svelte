<script>
    import {companyName, statusBar } from '$stores'

	let y;
	let show = true;

	$: {
	if (y > 70) {
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

	<meta name="theme-color" content="bg-lightbg">
</svelte:head>