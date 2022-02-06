<script>
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 300 }}
	class="w-screen h-screen bg-gray-500 opacity-70 fixed z-[100]"
/>
