<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { menu, contactModal, demoModal, requestModal, yStore, companyName, statusBar } from '../stores';
	import Hamburger from 'svelte-hamburgers';
	import closable from 'svelte-closable';
	import Logo from '../components/Logo.svelte';
	import Menu from './Minimenu.svelte';

	let dropdown = false;
	let dropButton;
	let dropIcon;
	let iconRotate;

	let open;

	let background;
	let text = '';
	let shadow;

	let y;

	onMount(() => {
		function onResize() {
			innerWidth = window.outerWidth;
			if (innerWidth < 775) {
				dropdown = false;
			}
		}

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});

	$: {
		// Animate the sticky header to change color when scrolled into page
		if (y >= 60) {
			shadow = 'shadow-lg';
			background = 'bg-mainbg';
			$statusBar = '#fffff'
		} else if (y < 60) {
			shadow = '';
			background = 'bg-transparent';
			if ($page.url.pathname === '/') {
				$statusBar = '#e0cf9b'
			}
			if ($page.url.pathname === '/about') {
				$statusBar = '#FFFFF'
			}
			if ($page.url.pathname === '/pricing') {
				$statusBar = '#e5e7eb'
			}
		}

		if (open === true) {
			background = 'bg-mobilemenu';
			$menu = true;
		} else {
			$menu = false;
		}

		if (dropdown === true) {
			background = 'bg-dropdown1';
			iconRotate = 'rotate-180 transition-all';
		} else {
			iconRotate = 'rotate-0 transition-all';
		}

		// Toggle dropdown when scrolling
		if ($yStore - y != 0) {
			dropdown = false;
			$contactModal = false;
			$demoModal = false;
			$requestModal = false;
		}
	}
</script>

<svelte:head>
	<!-- Import base css -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
	/>

	<!-- Import spin css (spin is default type) -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
	/>

	<meta name="theme-color" content="{$statusBar}">
</svelte:head>

<svelte:window bind:scrollY={y} />

<header
	class="{background} {text} {shadow} transition-all fixed w-full z-50 mb-10 ease-in-out py-2"
>
	<nav class="max-w-screen-2xl mx-auto px-8">
		<div class="flex justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a on:click={() => ($menu = false)} href="/" aria-label="Home Button" class="block xs:hidden w-auto">
					<p class="h-12 w-12">
						<Logo />
					</p>
				</a>

				<a href="/" class="hidden xs:flex flex-row" aria-label="Home Button">
					<div class="h-12 w-12">
						<Logo />
					</div>
					<p class="pl-5 self-center font-extrabold unselectable">{$companyName}</p>
				</a>
			</div>

			<!-- Mobile Menu -->
			<!-- Mobile menu button -->
			<div class="block md:hidden self-center">
				<Hamburger bind:open --color={text} --padding={0} />
					
				<Menu bind:open />
			</div>
			<!-- Desktop Menu -->
			<div class="hidden md:ml-6 md:flex md:space-x-8 {text}">
				<a
					href="/pricing"
					on:click={() => (dropdown = false)}
					class:active={$page.url.pathname === '/pricing'}
					class="hover:text-gray-700 transition-all inline-flex items-center text-sm font-bold"
				>
					<div class="link link-underline link-underline-black">Pricing</div>
				</a>

				<!-- Dropdown Menu -->
				<div class="z-0 inline-flex text-center">
					<button
						class="relative font-bold bg-transparent text-sm transition-all hover:text-gray-700 inline-flex items-center focus:outline-none hover:cursor-pointer unselectable
							   "
						class:active={$page.url.pathname === '/contact-us' ||
							$page.url.pathname === '/about' ||
							$page.url.pathname === '/testimonials'}
						on:click={() => ((dropdown = !dropdown), ($yStore = y))}
						bind:this={dropButton}
					>
						Company

						<!-- Dropdown Icon -->
						<svg
							class="ml-2 h-5 w-5 {iconRotate}"
							bind:this={dropIcon}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					{#if dropdown}
						<div
							class="fixed left-0 right-0 top-[4.9rem] z-10 transform shadow-lg w-screen border-t-2 border-gray-500"
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 100 }}
							use:closable={{ exclude: [dropButton, dropIcon] }}
							on:outside-click={() => (dropdown = false)}
						>
							<div class="bg-dropdown1">
								<div
									class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-12 lg:px-8 lg:py-12 xl:py-16"
								>
									<a
										href="/testimonials"
										on:click={() => (dropdown = false)}
										in:fly={{ delay: 150, duration: 150, x: -500 }}
										class="-m-3 p-3 col-span-4 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
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
											<div
												class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
											>
												<div>
													<p class="text-base font-medium text-gray-900">Testimonials</p>
													<p class="mt-1 text-sm text-gray-500">
														Don't just take our word for it! Read from our extensive tesimonial
														list.
													</p>
												</div>
											</div>
										</div>
									</a>

									<a
										href="/contact-us"
										on:click={() => (dropdown = false)}
										in:fly={{ delay: 75, duration: 150, x: -500 }}
										class="-m-3 p-3 col-span-4 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
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
											<div
												class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
											>
												<div>
													<p class="text-base font-medium text-gray-900">Contact</p>
													<p class="mt-1 text-sm text-gray-500">
														Have more questions? Get in touch with the individuals behind it all.
													</p>
												</div>
											</div>
										</div>
									</a>

									<a
										href="/about"
										on:click={() => (dropdown = false)}
										in:fly={{ delay: 0, duration: 150, x: -500 }}
										class="-m-3 p-3 col-span-4 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
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
											<div
												class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
											>
												<div>
													<p class="text-base font-medium text-gray-900">About</p>
													<p class="mt-1 text-sm text-gray-500">
														Eager to learn about us? See who's behind the team and what we're all
														about.
													</p>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.active {
		/* --tw-border-opacity: 1;
		border-color: rgb(99 102 241 / var(--tw-border-opacity)); */
		color: rgb(64, 112, 85);
	}

	.menu {
		background-color: brown;
	}

	.menu:hover .menuitem {
		opacity: 0.25;
	}

	.menu .menuitem:hover {
		opacity: 1;
	}
</style>
