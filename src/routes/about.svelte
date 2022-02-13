<script>
	import { companyName } from '$stores';
	import Logo from '$icons/Logo.svelte';
	import Modal from '$components/Modal.svelte';
	import SectionHeader from '$pages/about/SectionHeader.svelte';
	import SectionIntro from '$pages/about/SectionIntro.svelte';
	import AboutDividers from '$pages/about/AboutDividers.svelte';
	import SectionValues from '$pages/about/SectionValues.svelte';
	import SectionMission from '$pages/about/SectionMission.svelte';
	import SectionStory from '$pages/about/SectionStory.svelte';
	import SectionFounders from '$pages/about/SectionFounders.svelte';
	import SectionJoinTeam from '$pages/about/SectionJoinTeam.svelte';
</script>

<SectionHeader />

<main class="min-h-screen text-maintext">
	<SectionIntro />

	<SectionValues />

	<SectionMission />

	<SectionStory />

	<SectionFounders />

	<SectionJoinTeam />
</main>
