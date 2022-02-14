<script>
	import SectionHeader from '$pages/about/SectionHeader.svelte';
	import SectionIntro from '$pages/about/SectionIntro.svelte'
	import SectionValues from '$pages/about/SectionValues.svelte';
	import SectionMission from '$pages/about/SectionMission.svelte';
	import SectionStory from '$pages/about/SectionStory.svelte';
	import SectionFounders from '$pages/about/SectionFounders.svelte';
	import SectionJoinTeam from '$pages/about/SectionJoinTeam.svelte';
	import Modal from '$components/Modal.svelte';

	let modalComponent;
	let email;

	function handleSubmit() {
		modalComponent.toggleModal();
		modalComponent.storeY();

		email = '';
	}
</script>

<SectionHeader />

<Modal bind:this={modalComponent}>
	Thank you for submitting! We will contact you shortly with a reply to your awesome question :)
</Modal>

<main class="min-h-screen text-maintext">
	<SectionIntro />

	<SectionValues />

	<SectionMission />

	<SectionStory />

	<SectionFounders />

	<SectionJoinTeam on:submit={handleSubmit} {email} />
</main>
