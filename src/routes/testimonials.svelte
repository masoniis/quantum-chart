<script>
	import { scale, slide, fly, fade } from 'svelte/transition';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import { companyName } from '../stores';

	let y;
</script>

<title>{$companyName}  - Testimonials</title>

<svelte:window bind:scrollY={y} />

<main class="min-h-screen text-maintext overflow-hidden bg-gray-50">
	<!-- Section 1 -->
	<section class="min-w-screen min-h-screen bg-gray-50 pt-40">
		<div class="max-w-6xl px-12 mx-auto xl:px-10">
			<div class="flex flex-col items-start justify-center w-full mb-10">
				<h2
					class="text-4xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl xl:text-6xl"
				>
					Learn why your neighbors love Beyondgreen
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

	<!-- Section 2 -->
	<section
		use:scrollRef={'testimonial-section'}
		class="flex items-center justify-center py-16 md:py-28 bg-gray-100 min-w-screen"
	>
		<div class="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
			<div
				class="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 items-center gap-10 w-full"
			>
				<!-- Card #1 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>

				<!-- Card #2 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>

				<!-- Card #3 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Cane Jooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>

				<!-- Card #4 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>

				<!-- Card #5 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>

				<!-- Card #6 -->
				<blockquote
					class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
				>
					<div class="flex flex-col mx-auto">
						<div class="relative">
							<svg
								class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 125"
							>
								<path
									d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
								/>
							</svg>
							<p class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base">
								I will tell you now, my lawn has never looked so breathtaking!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
			</div>
		</div>
	</section>
</main>
