<script>
	import { scale, slide, fly, fade } from 'svelte/transition';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import { companyName } from '../stores';

	let y;
</script>

<title>{$companyName} - Testimonials</title>
<meta
	name="description"
	content="{$companyName} testimonial page, view all the people that recognize our service."
/>

<svelte:window bind:scrollY={y} />

<main class="min-h-screen text-maintext overflow-hidden bg-gray-50">
	<!-- Section 1 -->
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

	<div class="main-wave bg-gray-200 fill-gray-50 z-[1]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>

	<!-- Section 2 -->
	<section
		use:scrollRef={'testimonial-section'}
		class="flex items-center justify-center py-16 md:py-28 bg-gray-200 min-w-screen"
	>
		<div class="max-w-6xl px-12 mx-auto bg-gray-200 md:px-16 xl:px-10">
			<div
				class="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 items-center gap-10 w-full"
			>
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								Making charts has been my hobby for a while and {$companyName} is by far the best software
								I've ever used.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Iris Williams <span class="hidden xs:inline text-gray-500"> - Chart Enthusiast </span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Woman 1 (1).jpg"
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								All of my employees are required to learn how to use {$companyName} as one of the first
								parts of their training.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Avery Harris <span class="hidden xs:inline text-gray-500">
								- CEO of AmeriGo Finance
							</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Woman 2 (1).jpg"
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								When my professors ask how I make such good charts, I just show them to this
								software. It's also very easy to use!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Victor Appat <span class="hidden xs:inline text-gray-500"> - College Student </span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Man 1 (1).jpg"
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								I got the starting loan for my company with a presentation made with this software.
								Thank you {$companyName}!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Marcus Paslay <span class="hidden xs:inline text-gray-500"> - CEO of Piatello </span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Man 2 (1).jpeg"
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								{$companyName} has made it so easy to make charts for work presentations!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Nicholas Carboni <span class="hidden xs:inline text-gray-500">
								- Financial Consultant
							</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Man 3 (1).jpg"
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
							<p
								class="mt-2 text-sm text-gray-600 
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
							>
								{$companyName} makes our workplace much more fun with its graphics, animations, and immersive
								AR and VR technology.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Carter Wilson <span class="hidden xs:inline text-gray-500">
								- CEO of Grateful Law
							</span>
						</h3>
					</div>
					<img
						class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="static/Testimonial Man 4 (1).jpg"
						alt=""
					/>
				</blockquote>
			</div>
		</div>
	</section>
	
	<!-- BOTTOM DIVIDER (for start now section) -->
	<div class="join-team-bottomwave fill-gray-200 mb-24">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
				opacity=".25"
				class="shape-fill"
			/>
			<path
				d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
				opacity=".5"
				class="shape-fill"
			/>
			<path
				d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
				class="shape-fill"
			/>
		</svg>
	</div>
</main>

<style>
	.main-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.main-wave svg {
		position: relative;
		display: block;
		width: calc(122% + 1.3px);
		height: 103px;
	}
</style>
