<script>
    import {companyName, statusBar } from '$stores'
</script>

<svelte:head>
	<title>Home - {$companyName}</title>
	<meta
		name="description"
		content="{$companyName} home page, make beautiful charts in the blink of an eye."
	/>

	<meta name="theme-color" content="#014473">
</svelte:head>