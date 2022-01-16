<script>
	import { fade, scale, slide } from 'svelte/transition';

	export let open;
</script>

{#if open}
	<div
		class="md:hidden fixed right-0 left-0 w-full top-[4.5rem]"
		id="mobile-menu"
		in:slide={{ duration: 300 }}
		out:fade={{ duration: 100 }}
	>
		<div class="pt-2 space-y-1 bg-mainbg">
			<a
				on:click={() => (open = false)}
				href="/"
				class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a
			>
			<a
				on:click={() => (open = false)}
				href="/products"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Products</a
			>
			<a
				on:click={() => (open = false)}
				href="/pricing"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Pricing</a
			>

			<!-- Company Section -->
			<div class="bg-lightbg pb-1">
				<div class="text-gray-500 text-sm font-light border-b-[1px] border-gray-400 py-2 pl-3">
					Company
				</div>
				<div class="flex flex-col justify-between sm:flex-row container mx-auto space-x-4 pl-4 min-w-full">

					<!-- Flex item 1 -->
					<div class="flex space-x-4 pl-4 sm:p-0">
						<p class="self-center">ICON 1</p>
						<a
							on:click={() => (open = false)}
							href="/about"
							class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pr-4 py-2 border-l-4 text-base font-medium"
						>
							About
						</a>
					</div>

					<!-- Flex item 2 -->
					<div class="flex space-x-4 sm:pl-4">
						<p class="self-center">ICON 2</p>
						<a
							on:click={() => (open = false)}
							href="/contact-us"
							class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pr-4 py-2 border-l-4 text-base font-medium"
						>
							Contact
						</a>
					</div>

					<!-- Flex item 3 -->
					<div class="flex space-x-4 sm:pl-4">
						<p class="self-center">ICON 3</p>
						<a
							on:click={() => (open = false)}
							href="/employment"
							class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pr-4 py-2 border-l-4 text-base font-medium"
						>
							Employment
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
</style>