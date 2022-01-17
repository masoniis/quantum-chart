<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Botbar from '../components/Botbar.svelte';

	import { menu } from '../stores';

	let hide;

	$: {
		if ($menu === true) {
			hide = 'hidden';
		} else {
			hide = '';
		}
	}
</script>

<Navbar />
<main class={hide}>
	<slot />
<Botbar />
</main>
