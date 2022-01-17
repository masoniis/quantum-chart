<script>
	import { fade, fly } from 'svelte/transition';
	import Visibility from '../components/Visibility.svelte';
	import Menu from '../components/Minimenu.svelte';
	import Hamburger from 'svelte-hamburgers';
	import Navbar from '../components/Navbar.svelte'
	import { writable, readable, get } from 'svelte/store';

</script>

<title>BeyondGreen - Contact</title>

<main class="min-h-screen text-maintext overflow-hidden pt-20">
	<!-- Intro area -->
	<div class="text-center mx-auto">
		<br />
		<h4 class="pb-4">Have a question?</h4>
		<h1 class="pb-4 text-4xl">Contact Us</h1>
		<p class="max-w-lg mx-auto px-4">
			We're here to help and ready to answer any questions that you have for us. We look forward to
			hearing from you!
		</p>
	</div>

	

	<!-- Form Section -->
	<form class="w-10/12 max-w-lg mx-auto my-10 p-10 bg-violet-100 rounded-xl shadow-lg">
		<!-- Form Element Container, GRID -->
		<div class="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4">
			<div class="sm:col-span-2">
				<label for="first-name" class="block text-sm font-medium text-gray-700"> First name </label>
				<div class="mt-1">
					<input
						type="text"
						name="first-name"
						id="first-name"
						autocomplete="given-name"
						placeholder="John"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
				<div class="mt-1">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autocomplete="family-name"
						placeholder="Smith"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-4">
				<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
				<div class="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						placeholder="you@example.com"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-4">
				<label for="message" class="block text-sm font-medium text-gray-700"> Message </label>
				<div class="mt-1">
					<textarea
						id="message"
						name="message"
						rows="3"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
			</div>
		</div>
		<div class="pt-5">
			<div class="flex justify-end">
				<button
					type="reset"
					class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Clear
				</button>
				<button
					type="submit"
					class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Send
				</button>
			</div>
		</div>
	</form>
	<br /><br /><br /><br /><br /><br /><br /><br />

	<!--  ↓ Top Shape Divider ↓  -->
	<div class="top-wave fill-lightbg">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>

	<!--     Contact Section     -->
	<Visibility threshold="30" let:visible>
		<div class="relative mx-0 px-2 min-w-10/12 py-14 md:py-24 bg-lightbg min-height-section">
			{#if visible}
				<div class="container mx-auto flex flex-col md:flex-row justify-center">
					<!-- Contact Info ICONS TAKEN FROM: https://iconmonstr.com PAY ATTENTION TO LICENSE-->

					<div
						class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
						in:fly={{ duration: 1400, x: -700 }}
					>
						<!-- Flex Item 1 -->
						<h1 class="font-bold text-lg px-10 py-10 ">Contact Information</h1>

						<!-- Flex Item 2 -->
						<div class="px-10 pb-10">
							<div class="flex flex-row flex-wrap pb-5">
								<svg
									class="self-center"
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
									><path
										d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
									/></svg
								>
								<div class="pl-5 overflow-hidden">
									<p>12345 Sesame Street Lane</p>
									<p>Parker, CO 80138</p>
								</div>
							</div>
							<div class="flex flex-row py-5">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
									><path
										d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
									/></svg
								>
								<p class="pl-5">+1 (123) 456-7890</p>
							</div>
							<div class="flex flex-row pt-5">
								<svg
									class="mr-5"
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
									><path
										d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
									/></svg
								>
								<a
									class="text-mainlink hover:text-mainlinkhover link link-underline link-underline-black"
									href="mail@landscape.com">mail@landscape.com</a
								>
							</div>
						</div>
					</div>

					<!-- How Can We Help? -->
					<div
						class="flex flex-col max-w-sm px-2 md:pl-8 self-center md:self-end border-t-2 md:border-0 mt-6 border-black"
						in:fly={{ duration: 1400, x: 700 }}
					>
						<h1 class="text-2xl font-bold pb-3 pt-4">How Can We Help?</h1>
						<p class="pb-2">
							Please select a topic below related to your inquiry. If you don’t find what you need,
							fill out our contact form.
						</p>

						<div>
							<a
								href="https://www.google.com/search?q=Book+a+Demo"
								class="text-mainlink hover:text-mainlinkhover text-lg font-medium link link-underline link-underline-black"
								>Book a Demo</a
							>
							<p class="pb-4">Request a demo from one of our landscape masters.</p>
						</div>

						<div class="py-4 mb-4 border-y-[1px] border-black">
							<a
								href="https://www.google.com/search?q=Do+Something"
								class=" text-mainlink hover:text-mainlinkhover text-lg font-medium link link-underline link-underline-black"
								>Do something</a
							>
							<p>Hey we can do something.</p>
						</div>
						<div>
							<a
								href="https://www.google.com/search?q=Join+the+Team"
								class="text-mainlink hover:text-mainlinkhover text-lg font-medium pt-4 link link-underline link-underline-black"
								>Join the Team</a
							>
							<p>Join our force and earn commission for every successful task.</p>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</Visibility>

	<!-- ↑ Bottom Shape Divider ↑  -->
	<div class="bottom-wave fill-lightbg">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
</main>

<style>
	.min-height-section {
		min-height: 626px;
	}

	.top-wave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.top-wave svg {
		position: relative;
		display: block;
		width: calc(221% + 1.3px);
		height: 61px;
		transform: rotateY(180deg);
	}

	.bottom-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.bottom-wave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 66px;
	}
</style>
