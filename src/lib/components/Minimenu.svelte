<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { menu } from '$stores';

	export let open;

	let xWidth;

	$: {
		if (xWidth >= 775) {
			open = false;
		}

		if ($menu === false) {
			open = false;
		}
	}
</script>

<svelte:window bind:innerWidth={xWidth} />

{#if open}
	<main
		class="md:hidden -z-50 -mt-20 fixed right-0 left-0 w-full top-[4.5rem] mobile_menu overscroll-y-none"
		id="mobile-menu"
		in:fade={{ duration: 600 }}
		out:fade={{ duration: 150 }}
	>
		<div class="pt-24 space-y-1 bg-mobilemenu min-h-full">
			<hr
				class="my-2"
				style="height:2px;border-width:0;color:red;background-color:gray"
				transition:scale|local={{ duration: 100, easing: quadIn, opacity: 1 }}
			/>
			<a
				on:click={() => (open = false)}
				transition:fly|local={{ duration: 150, x: 500 }}
				href="/"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
			>
				Home</a
			>
			<a
				on:click={() => (open = false)}
				transition:fly|local={{ duration: 300, x: 500 }}
				href="/pricing"
				class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
			>
				Pricing</a
			>

			<div class="bg-lightbg py-4 space-y-4">
				<div class="text-gray-500 text-sm font-semibold pt-2 pl-3">Company</div>
				<hr
					class="my-2"
					style="height:2px;border-width:0;color:red;background-color:gray"
					transition:scale|local={{ duration: 100, easing: quadIn, opacity: 1 }}
				/>
				<div
					class="grid grid-cols-1 grid-rows-3 xs:grid-rows-2 xs:grid-cols-2 container mx-auto min-w-full"
				>
					<!-- Grid Item 1 -->
					<div
						class="flex justify-start xs:justify-center xs:pl-0 pl-4 space-x-2"
						transition:fly|local={{ duration: 750, x: 300 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 self-center"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<a
							on:click={() => (open = false)}
							href="/about"
							class="border-transparent text-maintext hover:text-lighthover block pr-4 py-2 border-l-4 font-medium"
						>
							About
						</a>
					</div>

					<!-- Grid Item 2 -->
					<div
						class="flex justify-start xs:justify-center xs:pl-0 pl-4 space-x-2"
						transition:fly|local={{ duration: 900, x: 300 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 self-center"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
							/>
						</svg>
						<a
							on:click={() => (open = false)}
							href="/contact"
							class="border-transparent text-maintext hover:text-lighthover block pr-4 py-2 border-l-4 font-medium"
						>
							Contact
						</a>
					</div>

					<!-- Grid Item 3 -->
					<div
						class="flex justify-start xs:col-span-2 xs:justify-center xs:pl-0 pl-4 space-x-2"
						transition:fly|local={{ duration: 1050, x: 300 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 self-center"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<a
							on:click={() => (open = false)}
							href="/testimonials"
							class="border-transparent text-maintext hover:text-lighthover block pr-4 py-2 border-l-4 font-medium"
						>
							Testimonials
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
{/if}

<style>
	.mobile_menu {
		height: calc(100vh - 70px);
		max-height: calc(100vh - 70px);
		width: 100%;
		overflow-y: scroll;
	}

	/* width */
	main::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	main::-webkit-scrollbar-track {
		background: #9fa6af;
		border-radius: 100vw;
		margin-block: 0.25rem;
	}

	/* Handle */
	main::-webkit-scrollbar-thumb {
		background: rgb(105, 102, 102);
		border-radius: 100vw;
	}

	/* Handle on hover */
	main::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	@supports (scrollbar-color: #555 transparent) {
		main {
			scrollbar-color: #999 #555;
			scrollbar-width: thin;
			overflow-x: hidden;
		}
	}
</style>
