<script>
	import { fly, scale, slide } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open;
</script>

{#if open}
	<div
		class="md:hidden fixed right-0 left-0 w-full top-[4.5rem]"
		id="mobile-menu"
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 150 }}
	>
		<div class="pt-2 pb-3 space-y-1">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
			<a
				href="/"
				class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Home</a
			>
			<a
				href="/products"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Products</a
			>
			<a
				href="/pricing"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Pricing</a
			>
			<a
				href="/contact-us"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Contact</a
			>
		</div>
	</div>
{/if}

<style>
</style>
