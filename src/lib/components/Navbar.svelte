<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { menu, yStore, companyName, statusBar } from '../../stores';
	import Hamburger from 'svelte-hamburgers';
	import closable from 'svelte-closable';
	import Menu from '$components/Minimenu.svelte';
	import NavLogo from '$components/NavLogo.svelte';
	import DesktopMenu from './DesktopMenu.svelte';

	let dropdown;

	let open;
	let background;
	let text = '';
	let shadow;
	let y;

	$: {
		// Animate the sticky header to change color when scrolled into page
		if (y >= 60) {
			shadow = 'shadow-lg';
			background = 'bg-mainbg';
		} else if (y < 60) {
			shadow = '';
			background = 'bg-transparent';
		}
		if (open === true) {
			background = 'bg-mobilemenu';
			$menu = true;
		} else {
			$menu = false;
		}
		if (dropdown === true) {
			background = 'bg-dropdown1';
		}
		// Toggle dropdown when scrolling
		if ($yStore - y != 0) {
			dropdown = false;
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

	<meta name="theme-color" content={$statusBar} />
</svelte:head>

<svelte:window bind:scrollY={y} />

<header
	class="{background} {text} {shadow} transition-all fixed w-full z-50 mb-10 ease-in-out py-2"
>
	<nav class="max-w-screen-2xl mx-auto px-8">
		<div class="flex justify-between h-16">
			<!-- Logo -->
			<NavLogo />

			<!-- Mobile Menu -->
			<!-- Mobile menu button -->
			<div class="block md:hidden self-center">
				<Hamburger bind:open --color={text} --padding={0} />

				<Menu bind:open />
			</div>
			<!-- Desktop Menu -->
			<DesktopMenu bind:dropdown />
			
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
