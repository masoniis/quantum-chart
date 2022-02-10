<script>
	import Modal, { storeY, y, yStore } from '../../components/Modal.svelte';
	import { modal } from '../../stores';

	//From the Modal component
	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	$: {
		if ($modal === false) showModal = false;

		console.log($modal);

		console.log(yStore - y)
	}

	function clickHandler() {
		toggleModal();
		storeY();

		console.log('Consider the click handeled');

	}
</script>

<Modal {showModal} on:click={toggleModal} />

<main
	class="min-h-screen"
	on:scroll={() => {
		console.log('SCROLLED');
	}}
>
	<button class="pt-72 back" on:click={clickHandler}> ME BUTTON </button>
</main>
