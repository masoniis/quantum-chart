<script>
	import TestimonialDividers from '$pages/testimonials/TestimonialDividers.svelte';
	import SectionQuotes from '$pages/testimonials/SectionQuotes.svelte';
	import SectionIntroduction from '$pages/testimonials/SectionIntroduction.svelte';
	import SectionHeader from '$pages/testimonials/SectionHeader.svelte';
</script>

<SectionHeader />

<main class="min-h-screen text-maintext overflow-hidden">
	<SectionIntroduction />

	<!-- <TestimonialDividers type="testimonial-top" /> 
	COmmented out to fix later, for some reason having this enabled glitches minimenu transition
	-->

	<SectionQuotes />

	<TestimonialDividers type="testimonial-bottom" />
</main>
