<script lang="ts">
	import '../app.css';
	import { menu } from '../stores';
	import Navbar from '../components/Navbar.svelte';
	import Botbar from '../components/Botbar.svelte';
	import { Svrollbar } from 'svrollbar';

	let hide;

	$: {
		if ($menu === true) {
			hide = 'fixed';
		} else {
			hide = '';
		}
	}
</script>

<Navbar />

<main class="{hide} firefox_scroller">
	<slot />
	<Botbar />
</main>

<style>
	/* width */
	:root::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 100vw;
		margin-block: 0.25rem;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 100vw;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	@supports (scrollbar-color: #555 transparent) {
		:root {
			scrollbar-color: #555 transparent;
			scrollbar-width: thin;
		}
	}
</style>
