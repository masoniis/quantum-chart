<script>
	import DropIcon from '../../components/Icons/DropIcon.svelte';
	import { scale, fly } from 'svelte/transition';

	let dropdown = false;
	let inside;

	function toggleEnter() {
		if (inside === true) {

		} else {
			dropdown = !dropdown;
		}
	}

	function toggleLeave() {
		if (inside === true) {
			inside = false;
			dropdown = !dropdown;
		}
	}

	function dropTrue() {
		dropdown = true;
	}
</script>

<br /><br /><br /><br /><br />

<main class="min-h-screen bg-mainbg">
	<div class="z-0 relative text-center text-gray-500 hover:text-black">
		<div
			class="bg-white rounded-md inline-flex items-center text-base font-medium focus:outline-none"
			on:mouseenter={toggleEnter}
			
		>
			Dropdown <DropIcon />
		</div>

		{#if dropdown}
			<div
				class="absolute z-10 inset-x-0 transform shadow-lg"
				in:scale={{ duration: 100, start: 0.95 }}
				out:scale={{ duration: 100, start: 0.95 }}
				on:mouseleave={toggleLeave}
			>
				<div class="bg-white">
					<div
						
					class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
					>
						<a
							href="/"
							in:fly={{ delay: 400, duration: 200, x:-500 }}
							class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
						>
							<div class="flex md:h-full lg:flex-col">
								<div class="flex-shrink-0">
									<div
										class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
									>
										<!-- Heroicon name: outline/chart-bar -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
									<div>
										<p class="text-base font-medium text-gray-900">Analytics</p>
										<p class="mt-1 text-sm text-gray-500">
											Get a better understanding of where your traffic is coming from.
										</p>
									</div>
									<p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
										Learn more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</div>
						</a>

						<a
							href="#"
							in:fly={{ delay: 300, duration: 200, x:-500 }}
							class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
						>
							<div class="flex md:h-full lg:flex-col">
								<div class="flex-shrink-0">
									<div
										class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
									>
										<!-- Heroicon name: outline/cursor-click -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
									<div>
										<p class="text-base font-medium text-gray-900">Engagement</p>
										<p class="mt-1 text-sm text-gray-500">
											Speak directly to your customers in a more meaningful way.
										</p>
									</div>
									<p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
										Learn more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</div>
						</a>

						<a
							href="#"
							in:fly={{ delay: 200, duration: 200, x:-500 }}
							class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
						>
							<div class="flex md:h-full lg:flex-col">
								<div class="flex-shrink-0">
									<div
										class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
									>
										<!-- Heroicon name: outline/shield-check -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
									<div>
										<p class="text-base font-medium text-gray-900">Security</p>
										<p class="mt-1 text-sm text-gray-500">
											Your customers&#039; data will be safe and secure.
										</p>
									</div>
									<p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
										Learn more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</div>
						</a>

						<a
							href="#"
							in:fly={{ delay: 100, duration: 200, x:-500 }}
							class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
						>
							<div class="flex md:h-full lg:flex-col">
								<div class="flex-shrink-0">
									<div
										class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
									>
										<!-- Heroicon name: outline/view-grid -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
											/>
										</svg>
									</div>
								</div>
								<div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
									<div>
										<p class="text-base font-medium text-gray-900">Integrations</p>
										<p class="mt-1 text-sm text-gray-500">
											Connect with third-party tools that you&#039;re already using.
										</p>
									</div>
									<p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
										Learn more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="bg-gray-50">
					<div
						class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
					>
						<div class="flow-root">
							<a
								href="#"
								class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
							>
								<!-- Heroicon name: outline/play -->
								<svg
									class="flex-shrink-0 h-6 w-6 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="ml-3">Watch Demo</span>
							</a>
						</div>

						<div class="flow-root">
							<a
								href="#"
								class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
							>
								<!-- Heroicon name: outline/check-circle -->
								<svg
									class="flex-shrink-0 h-6 w-6 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="ml-3">View All Products</span>
							</a>
						</div>

						<div class="flow-root">
							<a
								href="#"
								class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
							>
								<!-- Heroicon name: outline/phone -->
								<svg
									class="flex-shrink-0 h-6 w-6 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span class="ml-3">Contact Sales</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</main>
