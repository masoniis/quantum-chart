<script>
	import Modal from '../../components/Modal.svelte';
	import { modal } from '../../stores';

	//From the Modal component
	let showModal = false;
    let modalComponent;

	const toggleModal = () => {
		showModal = !showModal;
	};

	$: {
		if ($modal === false) showModal = false;

		console.log($modal);


	}

	function clickHandler() {
		toggleModal();
        modalComponent.storeY();

		console.log('Consider the click handeled');

	}
</script>

<Modal bind:this={modalComponent} bind:showModal={showModal} on:click={toggleModal} />

<main
	class="min-h-screen"
	on:scroll={() => {
		console.log('SCROLLED');
	}}
>
	<button class="pt-72 back" on:click={clickHandler}> ME BUTTON </button>
</main>
