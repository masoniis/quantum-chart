<script>

    import {companyName} from '$stores'

</script>


<svelte:head>
	<title>Home - {$companyName}</title>
	<meta
		name="description"
		content="{$companyName} home page, make beautiful charts in the blink of an eye."
	/>
</svelte:head>