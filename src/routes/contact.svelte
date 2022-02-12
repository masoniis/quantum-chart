<script lang="ts">
	import SectionHeader from '$pages/contact/SectionHeader.svelte';
	import SectionIntro from '$pages/contact/SectionIntro.svelte';
	import SectionInformation from '$pages/contact/SectionInformation.svelte';

	import ContactDividers from '$pages/contact/ContactDividers.svelte';
	import Contactform from '$components/Contactform.svelte';
	import Modal from '$components/Modal.svelte';

	//A variable to bind the modal component
	let modalComponent;

	let first, last, email, message;

	function handleSubmit(e) {
		modalComponent.toggleModal();
		modalComponent.storeY();

		first = last = email = message = '';
	}
</script>

<SectionHeader />

<Modal bind:this={modalComponent}>
	Thank you for submitting! We will contact you shortly with a reply to your awesome question :)
</Modal>

<main class="min-h-screen text-maintext overflow-hidden pt-32">
	<SectionIntro />

	<Contactform {first} {last} {email} {message} on:submit={handleSubmit} />

	<ContactDividers type="TopWave" />

	<SectionInformation />

	<ContactDividers type="BotWave" />
</main>
