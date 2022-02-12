<script>
	import { scrollRef } from 'svelte-scrolling';
	import Blockquote from '$components/Blockquote.svelte';
	import testimonialQuotes from '$lib/pages/testimonials/testimonialQuotes';
</script>

<section
	use:scrollRef={'testimonial-section'}
	class="flex items-center justify-center py-16 md:py-28 bg-gray-200 min-w-screen"
>
	<div class="max-w-6xl px-12 mx-auto bg-gray-200 md:px-16 xl:px-10">
		<div
			class="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 items-center gap-10 w-full"
		>
			{#each testimonialQuotes as quote}
				<Blockquote src={quote.src} classes="min-h-full">
					<span slot="quote">
						{quote.text}
					</span>

					<span slot="person">
						{quote.person}
					</span>

					<span slot="reference">
						{quote.reference}
					</span>
				</Blockquote>
			{/each}
		</div>
	</div>
</section>
