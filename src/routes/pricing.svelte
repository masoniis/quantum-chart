<script>
	import { companyName } from '../stores';
	import { fade, fly } from 'svelte/transition';

	let individual = 4;
	let premium = 10;
	let team = 75;
	let currentPlanAbbreviated = 'month';
	let planButtonClicked = 1;

	function handleClick(plan) {
		if (plan === 'monthly') {
			individual = 4;
			premium = 10;
			team = 75;
			currentPlanAbbreviated = 'month';
			planButtonClicked = 1;
		} else {
			individual = 39;
			premium = 99;
			team = 699;
			currentPlanAbbreviated = 'year';
			planButtonClicked = 2;
		}
	}
</script>

<title>{$companyName} - Pricing</title>
<meta name="description" content="{$companyName} price page, pay little to access beautiful charts.">

<main class="min-h-screen bg-light-bg pt-36 bg-gray-200">
	<!-- Pricing box Section -->
	<section class="max-w-7xl mx-auto pb-24 px-2 sm:px-6 lg:px-8">
		<div class="sm:flex sm:flex-col sm:align-center">
			<h1 class="text-5xl font-extrabold text-gray-900 text-center">Pricing Plans</h1>
			<p class="mt-5 text-xl text-gray-500 text-center">
				Try any of our plans and experiment with their unique features. Switch at any time for no additional
				fees.
			</p>
			<div class="relative self-center mt-6 mb-6 sm:mb-0 mx-auto bg-lightbg rounded-lg p-0.5 flex sm:mt-8">
				<button
					type="button"
					class="relative w-1/2 border-gray-200 transition-all duration-300 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
					class:active={planButtonClicked === 1}
					on:click={() => handleClick('monthly')}>Monthly billing</button
				>
				<button
					type="button"
					class="ml-0.5 relative w-1/2 border border-transparent transition-all duration-300 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
					class:active={planButtonClicked === 2}
					on:click={() => handleClick('yearly')}>Yearly billing</button
				>
			</div>
		</div>
		<grid
			class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 grid-cols-1 sm:grid sm:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3 bg-transparent"
		>
			<div in:fade={{ delay: 0, duration: 300 }} class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg">
				<div class="p-6">
					<h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
					<p class="mt-4 text-sm text-gray-500">Your standard chart service</p>
					<p class="mt-8">
						{#key planButtonClicked}
							<span
								in:fade={{ duration: 300, delay: 200 }}
								out:fade|local={{ duration: 200 }}
								class="text-4xl font-extrabold text-gray-900">${individual}</span
							>
							<span
								in:fade={{ duration: 300, delay: 200 }}
								out:fade|local={{ duration: 200 }}
								class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
							>
						{/key}
					</p>
					<button
						class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
						>Buy Basic</button
					>
				</div>
				<div class="pt-6 pb-8 px-6">
					<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
					<ul class="mt-6 space-y-4">
						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Access to 6 different types of charts</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Export, save, and download finished charts</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Limit of 10 charts per month</span>
						</li>
					</ul>
				</div>
			</div>
			<div in:fade={{ delay: 250, duration: 300 }} class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg">
				<div class="p-6">
					<h2 class="text-lg leading-6 font-medium text-gray-900">Premium</h2>
					<p class="mt-4 text-sm text-gray-500 mb-8">Every chart you need and more</p>
					{#key planButtonClicked}
						<span
							in:fade={{ duration: 300, delay: 200 }}
							out:fade|local={{ duration: 200 }}
							class="text-4xl font-extrabold text-gray-900">${premium}</span
						>
						<span
							in:fade={{ duration: 300, delay: 200 }}
							out:fade|local={{ duration: 200 }}
							class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
						>
					{/key}
					<button
						class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
						>Buy Premium</button
					>
				</div>
				<div class="pt-6 pb-8 px-6">
					<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
					<ul class="mt-6 space-y-4">
						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Access to 15 different types of charts</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Export finished charts as .pdf, .jpg, and much more</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Animate charts with a variety of built-in features</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Immerse yourself in your charts with advanced AR and VR technology</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Unlimited charts per month</span>
						</li>
					</ul>
				</div>
			</div>
			<div in:fade={{ delay: 500, duration: 300 }} class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg">
				<div class="p-6">
					<h2 class="text-lg leading-6 font-medium text-gray-900">Team</h2>
					<p class="mt-4 text-sm text-gray-500">Charts for the whole group</p>
					<p class="mt-8">
						{#key planButtonClicked}
							<span
								in:fade={{ duration: 300, delay: 200 }}
								out:fade|local={{ duration: 200 }}
								class="text-4xl font-extrabold text-gray-900">${team}</span
							>
							<span
								in:fade={{ duration: 300, delay: 200 }}
								out:fade|local={{ duration: 200 }}
								class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
							>
						{/key}
					</p>
					<button
						class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
						>Buy Team</button
					>
				</div>
				<div class="pt-6 pb-8 px-6">
					<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
					<ul class="mt-6 space-y-4">

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Register up to 20 different users</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Access to 15 different types of charts</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Export finished charts as .pdf, .jpg, and much more</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Animate charts with a variety of built-in features</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500"
								>Immerse yourself in your charts with advanced AR and VR technology</span
							>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Unlimited charts per month</span>
						</li>

						<li class="flex space-x-3">
							<!-- Heroicon name: solid/check -->
							<svg
								class="flex-shrink-0 h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm text-gray-500">Share charts by creating QuantumGroups</span>
						</li>
					</ul>
				</div>
			</div>
		</grid>
	</section>

	<!-- WAVE DIVIDER top Free Trial -->
	<div class="pricing-wave">
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

	<!-- Free Trial Section -->
	<section class="bg-lightbg py-24">
		<h1 class="text-6xl text-center">
			Try {$companyName} on Your Projects
		</h1>

		<p class="text-center pt-4">
			Start a 7-day free trial and enjoy all the premium features {$companyName} offers! (No credit card
			needed.)
		</p>

		<flex class="flex justify-center gap-12 sm:gap-24 pt-4">
			<button
				class="bg-blue-500 py-2 sm:py-3 px-4 sm:px-6 border border-gray-300 rounded-md shadow-sm text-xl sm:text-2xl font-medium text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Start Trial
			</button>
			<form
				method="post"
				action="/contact-us"
			>
				<button
					type="submit"
					class="bg-mainlink py-2 sm:py-3 px-4 sm:px-6 border border-gray-300 rounded-md shadow-sm text-xl sm:text-2xl font-medium text-gray-300 hover:bg-mainlinkhover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>Contact Us</button>
			</form>
		</flex>
	</section>

	<!-- Free Trial Bottom Wave Divider -->
	<div class="trial-wave bg-gray-200">
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

	<!-- FAQ Section -->
	<section class="bg-gray-200 py-24">
		<h1 class="font-extrabold text-5xl text-center pb-12">
			Frequently Asked Questions
		</h1>

		<!-- Question Grid -->
		<grid class="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-5xl gap-10 px-8">
			<div class="space-y-2">
				<strong class="text-xl font-bold">Why should I spend money on this instead of using a free chart software?</strong>
				<p class="text-sm font-normal text-maintext">
					{$companyName} offers a variety of products not available with free chart software. Our advanced AR and VR software allows you to visualize and edit charts in 3D and our animation features allow you to quickly and easily make charts that will make anyone say "wow!".
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">How do I set up {$companyName} on my computer?</strong>
				<p class="text-sm font-normal text-maintext">
					It's simple! Once you've purchased your subscription, you will be taken to a download page and emailed a unique key. Just download our app, enter the key, and you're good to go! The software provides an easy-to-follow tutorial that you can go through at any time.
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">How should I choose what plan is best for me?</strong>
				<p class="text-sm font-normal text-maintext">
					Our Basic plan is best if you only need to make charts occasionally and are fine with simple options. If you want to dive deeper into the possibilities offered by Quantum Charts and have access to all of our unique features, try Premium! Our Team plan works best for larger organizations and groups and offers a discount if you want to register up to 20 users.
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">What file formats can I export my charts as?</strong>
				<p class="text-sm font-normal text-maintext">
					{$companyName} supports .pdf, .jpg, .png, .md, .gif, .jpeg, .ai, and .tif chart exports. If your favorite file type isn't on here, feel free to <a href="/contact-us" class="text-mainlink hover:text-mainlinkhover link link-underline link-underline-black">contact us</a> with new suggestions!
				</p>
			</div>
		</grid>
	</section>
</main>

<style>
	.active {
		background: #c8c8c8;
	}

	.pricing-wave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.pricing-wave svg {
		position: relative;
		display: block;
		width: calc(177% + 1.3px);
		height: 55px;
		transform: rotateY(180deg);
	}

	.pricing-wave .shape-fill {
		fill: rgb(245 245 244)
	}

	.trial-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.trial-wave svg {
		position: relative;
		display: block;
		width: calc(163% + 1.3px);
		height: 89px;
		transform: rotateY(180deg);
	}

	.trial-wave .shape-fill {
		fill: #f5f5f4;
	}
</style>
