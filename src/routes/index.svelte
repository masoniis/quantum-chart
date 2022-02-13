<script>
	import { setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';
	import SectionHeader from '$pages/index/SectionHeader.svelte';
	import SectionIntro from '$pages/index/SectionIntro.svelte';
	import SectionNavigation from '$pages/index/SectionNavigation.svelte';
	import SectionEasy from '$pages/index/SectionEasy.svelte';
	import SectionReputation from '$pages/index/SectionReputation.svelte';
	import SectionLowCost from '$pages/index/SectionLowCost.svelte';
	import SectionResponsive from '$pages/index/SectionResponsive.svelte';
	import SectionRiskFree from '$pages/index/SectionRiskFree.svelte';
	import SectionStartNow from '$pages/index/SectionStartNow.svelte';

	setGlobalOptions({
		duration: 400,
		offset: -80,
		easing: cubicInOut
	});
</script>

<SectionHeader />

<main class="min-h-screen text-maintext overflow-hidden">
	<SectionIntro />

	<SectionNavigation />

	<SectionEasy />

	<SectionLowCost />

	<SectionResponsive />

	<SectionReputation />

	<SectionRiskFree />

	<SectionStartNow />
</main>
