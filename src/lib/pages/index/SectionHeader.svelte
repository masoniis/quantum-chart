<script>
	import { companyName, statusBar } from '$stores';
	import { tweened } from 'svelte/motion';
	import { interpolateLab } from 'd3-interpolate';

	const colors = ['rgb(224, 207, 155)', 'rgb(255, 255, 255)'];

	const color = tweened(colors[0], {
		duration: 300,
		interpolate: interpolateLab
	});

	let y;
	let show = true;

	$: {
		if (y < 60) {
			color.set('rgb(224, 207, 155)'); //Set color to tanish
		} else {
			color.set('rgb(255, 255, 255)'); //Set color to white
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

	<meta name="theme-color" content={$color} />
</svelte:head>

<br /><br /><br /><br /><br /><br />

{#each colors as c}
	<button style="background-color: {c}; color: white; border: none;" on:click={(e) => color.set(c)}
		>{c}</button
	>
{/each}

<h1>Hey i am</h1>

<h1 style="color: {$color}">{$color}</h1>
