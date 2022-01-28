<script>
	import { companyName } from '../stores';

	var basic = 1;
	var premium = 2;
	var pro = 3;
	var currentPlan = 'Monthly';
	var currentPlanAbbreviated = 'month';
	var areaButtonClicked = 0;
	var planButtonClicked = 0;
	function handleClick(plan) {
		if (plan === 'monthly') {
			basic = 1;
			premium = 2;
			pro = 3;
			currentPlan = 'Monthly';
			currentPlanAbbreviated = 'month';
			planButtonClicked = 1;
		} else {
			basic = 10;
			premium = 20;
			pro = 30;
			currentPlan = 'Yearly';
			currentPlanAbbreviated = 'year';
			planButtonClicked = 2;
		}
	}
	let squareFootage;
</script>

<title>{$companyName}  - Pricing</title>

<main class="min-h-screen bg-light-bg pt-20">
	<!-- <h1 class="text-light-text text-center">
		Our prices are always fair and affordable to give your lawn the best care possible
	</h1>
	<br />
	<br />
	<p class="text-center text-orange-700">{currentPlan} Pricing</p>
	<div class="flex justify-center">
		<button
			class="rounded-md border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
			class:active={planButtonClicked===1}
			on:click={() => handleClick('monthly')}
			>Monthly
		</button>
		<button
			class="rounded-md border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
			class:active={planButtonClicked===2}
			on:click={() => handleClick('yearly')}
			>Yearly
		</button>
	</div>
	<div class="flex text-center justify-center">
		<input
			style="width:200px"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
			type="text"
			id="square-footage"
			bind:value={squareFootage}
			maxlength="7"
			placeholder="Estimated Square Footage"
		/>
	</div>
	<div class="flex mx-auto justify-center text-center">
		{#if squareFootage > 0}
			<div style="margin:5px" class="bg-yellow-500 rounded-xl w-60 h-15">
				Basic<br />
				${Math.round(basic * squareFootage)}.99
			</div>
			<div style="margin:5px" class="bg-orange-600 rounded-xl w-60">
				Premium<br />
				${Math.round(premium * squareFootage)}.99
			</div>
			<div style="margin:5px" class="bg-red-700 rounded-xl w-60">
				Pro<br />
				${Math.round(pro * squareFootage)}.99
			</div>
		{:else}
			<div style="margin:5px" class="w-60 h-30 rounded-xl bg-yellow-500">
				Basic<br />
			</div>
			<div style="margin:5px" class="bg-orange-600 rounded-xl w-60">
				Premium<br />
			</div>
			<div style="margin:5px" class="bg-red-700 rounded-xl w-60">
				Pro<br />
			</div>
		{/if}
	</div> -->

	<!-- Form Section -->
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
			<div class="sm:flex sm:flex-col sm:align-center">
				<h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
				<p class="mt-5 text-xl text-gray-500 sm:text-center">
					Start building for free, then add a site plan to go live. Account plans unlock additional
					features.
				</p>
				<div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
					<button
						type="button"
						class="relative w-1/2 border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
						class:active={planButtonClicked===1}
						on:click={() => handleClick('monthly')}
						>Monthly billing</button
					>
					<button
						type="button"
						class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
						class:active={planButtonClicked===2}
						on:click={() => handleClick('yearly')}
						>Yearly billing</button
					>
				</div>
			</div>
			<div class="sm:flex sm:flex-col sm:align-center">
				<div class="relative self-center mt-6 rounded-lg p-0.5 flex">
					<button
						type="button"
						class:active={areaButtonClicked===1}
						class="relative w-1/2 bg-gray-100 border-gray-200 rounded-md shadow-sm py-1 text-xs font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-2 mx-4"
						on:click={() => areaButtonClicked=1}
						>0-5000</button
					>
					<button
						type="button"
						class:active={areaButtonClicked===2}
						class="ml-0.5 relative w-1/2 bg-gray-100 border border-transparent rounded-md py-1 text-xs font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-2 mx-4"
						on:click={() => areaButtonClicked=2}
						>5000-10000</button
					>
					<button
						type="button"
						class:active={areaButtonClicked===3}
						class="ml-0.5 relative w-1/2 bg-gray-100 border border-transparent rounded-md py-1 text-xs font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-2 mx-4"
						on:click={() => areaButtonClicked=3}
						>10000-20000</button
					>
					<button
						type="button"
						class:active={areaButtonClicked===4}
						class="ml-0.5 relative w-1/2 bg-gray-100 border border-transparent rounded-md py-1 text-xs font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-2 mx-4"
						on:click={() => areaButtonClicked=4}
						>20000+</button
					>
				</div>
				<p class="text-sm text-gray-500 sm:text-center">
					Approximate lawn square footage
				</p>
			</div>
			<div
				class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3"
			>
				<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
						<p class="mt-4 text-sm text-gray-500">Your standard lawn care service</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">${basic*areaButtonClicked}</span>
							<span class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span>
						</p>
						<a
							href="/products"
							class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
							>Buy Premium</a
						>
					</div>
					<div class="pt-6 pb-8 px-6">
						<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">
							What's included
						</h3>
						<ul role="list" class="mt-6 space-y-4">
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
								<span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc.</span>
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
								<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">Premium</h2>
						<p class="mt-4 text-sm text-gray-500">Includes extra stuff</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">${premium*areaButtonClicked}</span>
							<span class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span>
						</p>
						<a
							href="/products"
							class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
							>Buy Pro</a
						>
					</div>
					<div class="pt-6 pb-8 px-6">
						<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">
							What's included
						</h3>
						<ul role="list" class="mt-6 space-y-4">
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
									>Potenti felis, in cras at at ligula nunc.
								</span>
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
								<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
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
								<span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">Pro</h2>
						<p class="mt-4 text-sm text-gray-500">Includes even more stuff</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">${pro*areaButtonClicked}</span>
							<span class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span>
						</p>
						<a
							href="/products"
							class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
							>Buy Basic</a
						>
					</div>
					<div class="pt-6 pb-8 px-6">
						<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">
							What's included
						</h3>
						<ul role="list" class="mt-6 space-y-4">
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
									>Potenti felis, in cras at at ligula nunc.
								</span>
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
								<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
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
								<span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
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
								<span class="text-sm text-gray-500">Faucibus volutpat magna.</span>
							</li>
						</ul>
					</div>
				</div>

				
	</div>
</main>

<style>
	.active {
		background: #c8c8c8
	}
</style>
