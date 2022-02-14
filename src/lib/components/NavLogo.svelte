<script>
	import { menu, yStore, companyName, statusBar } from '../../stores';
	import Logo from '$icons/Logo.svelte';
</script>

<div class="flex items-center">
    <a
        on:click={() => ($menu = false)}
        href="/"
        aria-label="Home Button"
        class="block xs:hidden w-auto"
    >
        <p class="h-12 w-12 z-[2]">
            <Logo />
        </p>
    </a>

    <a on:click={() => ($menu = false)} href="/" class="hidden xs:flex flex-row" aria-label="Home Button">
        <div class="h-12 w-12 z-[2]">
            <Logo />
        </div>
        <p class="pl-5 self-center font-extrabold unselectable z-[2]">{$companyName}</p>
    </a>
</div>