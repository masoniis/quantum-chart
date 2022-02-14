<script>
	import SectionHeader from '$pages/pricing/SectionHeader.svelte';
	import SectionBoxes from '$pages/pricing/SectionBoxes.svelte';
	import SectionTrial from '$pages/pricing/SectionTrial.svelte';
	import SectionFAQ from '$pages/pricing/SectionFAQ.svelte';
</script>

<SectionHeader />

<main class="min-h-screen bg-light-bg pt-36 bg-gray-200">
	<SectionBoxes />

	<SectionTrial />

	<SectionFAQ />
</main>
