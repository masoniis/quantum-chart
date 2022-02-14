<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { menu, yStore, companyName, statusBar } from '../../stores';
	import Hamburger from 'svelte-hamburgers';
	import closable from 'svelte-closable';
	import Logo from '$icons/Logo.svelte';
	import Menu from '$components/Minimenu.svelte';
	import DekstopMenu from '$components/DesktopMenu.svelte';
	import { tweened } from 'svelte/motion';

	import { interpolateLab } from 'd3-interpolate';
import DesktopMenu from './DesktopMenu.svelte';
</script>

<div class="flex items-center">
    <a
        on:click={() => ($menu = false)}
        href="/"
        aria-label="Home Button"
        class="block xs:hidden w-auto"
    >
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