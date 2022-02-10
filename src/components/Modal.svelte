<script>
	import { slide, fade } from 'svelte/transition';
	import closable from 'svelte-closable';
	import { createEventDispatcher } from 'svelte';

	export let message = 'Oops! You forgot to set a message parameter.';
	export let showModal = false;

    let y = 0;
    let yStore = 0;

    export function storeY() {
        yStore = y;

        console.log("The stored y value is: " + yStore)
    }

    $: {
        if (yStore - y != 0) {
        showModal = false;
        yStore = y;
        console.log("MODAL FALSE?")
    }
}

</script>

<svelte:window bind:scrollY={y} />

{#if showModal}
	<div class="w-screen h-screen fixed bg-black/40 z-[100]" on:click|self>
		<modal
			in:slide={{ duration: 500 }}
			out:fade={{ duration: 200 }}
			class="mx-auto vertical-center relative z-[101] bg-zinc-100 rounded-md max-w-lg p-10 grid grid-cols-2 grid-rows-2"
		>
			<p class="col-span-2 text-center p-2 md:p-4">
				{message}
			</p>
			<button
				on:click={() => (showModal = false)}
				class="col-span-2 self-center p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Exit
			</button>
		</modal>
	</div>
{/if}

<style>
</style>
