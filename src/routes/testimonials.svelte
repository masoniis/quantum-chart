<script>
	import TestimonialDividers from '$lib/pages/testimonials/TestimonialDividers.svelte';
	import SectionQuotes from '$lib/pages/testimonials/SectionQuotes.svelte';
	import SectionIntroduction from '$lib/pages/testimonials/SectionIntroduction.svelte';
	import SectionHeader from '$lib/pages/testimonials/SectionHeader.svelte';
</script>

<SectionHeader />

<main class="min-h-screen text-maintext overflow-hidden bg-gray-50">
	<SectionIntroduction />

	<TestimonialDividers type="testimonial-top" />

	<SectionQuotes />

	<TestimonialDividers type="testimonial-bottom" />
</main>
