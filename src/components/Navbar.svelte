<script>
	import { page } from '$app/stores';
	import Logo from '../components/Logo.svelte';

	let background;
	let text;
	let shadow;
	let transition;
	let scrollDistance;

	$: {
		// Track the page and change the background accordingly
		if ($page.url.pathname === '/') {
			background = 'bg-transparent';
			text = 'text-black';
		} else {
			background = 'bg-transparent';
			text = 'text-maintext';
		}

		// Animate the sticky header to change color when scrolled into page
		if (scrollDistance > 50) {
			transition = 'transition-all duration-300';
			shadow = 'shadow-lg';
			background = 'bg-mainbg';
		} else {
			shadow = '';
		}
		if (scrollDistance === 0) {
			transition = '';
			shadow = '';
		}
	}
</script>

<svelte:window bind:scrollY={scrollDistance} />

<header class="{background} {text} {shadow} {transition} fixed w-full z-10 mb-10 ease-in-out py-2">
	<nav class="max-w-screen-2xl mx-auto px-8">
		<div class="flex justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<h1 class="block sm:hidden w-auto">
					<p class="h-12 w-12">
						<Logo />
					</p>
				</h1>

				<h1 class="hidden sm:flex flex-row">
					<a href="/" class="h-12 w-12">
						<Logo />
					</a>
					<p class="pl-5 self-center font-extrabold">Beyondgreen</p>
				</h1>
			</div>

			<!-- Mobile Menu -->
			<div class="-ml-2 mr-2 flex items-center md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!--
				 			Icon when menu is closed.
	
				  			Heroicon name: outline/menu
	
				  			Menu open: "hidden", Menu closed: "block"
						-->
					<svg
						class="block h-6 w-6"
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
				  			Icon when menu is open.
	
				  			Heroicon name: outline/x
	
				  			Menu open: "block", Menu closed: "hidden"
						-->
					<svg
						class="hidden h-6 w-6"
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
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden md:ml-6 md:flex md:space-x-8 {text}">
				<a
					href="/"
					class:active={$page.url.pathname === '/'}
					class="border-transparent hover:border-gray-300 hover:text-gray-700 transition-all inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Home
				</a>
				<a
					href="/products"
					class:active={$page.url.pathname === '/products'}
					class="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Products
				</a>
				<a
					href="/pricing"
					class:active={$page.url.pathname === '/pricing'}
					class="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Pricing
				</a>
				<a
					href="/contact-us"
					class:active={$page.url.pathname === '/contact-us'}
					class="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Contact Us
				</a>
			</div>
		</div>
	</nav>
</header>

<style>
	.active {
		--tw-border-opacity: 1;
		border-color: rgb(99 102 241 / var(--tw-border-opacity));
	}
</style>
