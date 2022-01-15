<script>
	import closable from 'svelte-closable';

	let button;
	let show = false;
</script>

<div class="parent pt-72 mx-auto container flex flex-row space-x-11">
	<div class="child">y</div>
	<div class="child">y</div>
	<div class="child">y</div>
	<div class="child">y</div>
	<div class="child">y</div>
	<div class="child">y</div>
</div>

<button class="container mx-auto bg-yellow-100" on:click={() => (show = !show)} bind:this={button}> Show </button>

{#if show}
	<div class="text-center" use:closable={{ exclude: [button] }} on:outside-click={() => (show = false)}>
		Hey i am the stuff
		</div>	
{/if}

<style>
	.child {
		background-color: yellow;
	}

	.parent:hover .child {
		opacity: 0.25;
	}

	.parent .child:hover {
		opacity: 1;
	}
</style>
