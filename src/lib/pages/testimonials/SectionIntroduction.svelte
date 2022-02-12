<script>
	import { scrollTo } from 'svelte-scrolling';
	import { companyName } from '../../../stores';
</script>

<section class="min-w-screen min-h-screen bg-gray-50 pt-40">
	<div class="max-w-6xl px-12 mx-auto xl:px-10">
		<div class="flex flex-col items-start justify-center w-full mb-10">
			<h2
				class="text-4xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"
			>
				Learn why your friends love {$companyName}
			</h2>
			<p class="my-6 text-lg text-gray-600 pt-10 mx-auto text-center">
				Don't just take our word for it, read from our extensive list of customer testimonials.
			</p>
			<button
				use:scrollTo={'testimonial-section'}
				class="mx-auto px-8 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-700 border border-transparent rounded-md shadow hover:bg-red-600 focus:outline-none focus:border-red-800 py-4 md:px-10"
				>View Testimonials</button
			>
		</div>
	</div>
</section>
