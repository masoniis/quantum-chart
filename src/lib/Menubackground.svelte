<script>
	import { fly, fade } from 'svelte/transition';
</script>

<div
	in:fly={{ duration: 350, x: 500 }}
	out:fade={{ duration: 25 }}
	class="w-screen h-screen bg-mobilemenu fixed z-10"
/>
