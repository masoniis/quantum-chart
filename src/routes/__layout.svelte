<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Botbar from '../components/Botbar.svelte';

	import { menu } from '../stores';

	let fixed;

	$: {
		if ($menu === true) {
			fixed = 'hidden';
		} else {
			fixed = '';
		}
	}
</script>

<Navbar />
<main class={fixed}>
	<slot />
</main>
<Botbar />
