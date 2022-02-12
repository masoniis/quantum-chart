<script>
	import TestimonialDividers from '$pages/testimonials/TestimonialDividers.svelte';
	import SectionQuotes from '$pages/testimonials/SectionQuotes.svelte';
	import SectionIntroduction from '$pages/testimonials/SectionIntroduction.svelte';
	import SectionHeader from '$pages/testimonials/SectionHeader.svelte';
</script>

<SectionHeader />

<main class="min-h-screen text-maintext overflow-hidden bg-gray-50">
	<SectionIntroduction />

	<TestimonialDividers type="testimonial-top" />

	<SectionQuotes />

	<TestimonialDividers type="testimonial-bottom" />
</main>
