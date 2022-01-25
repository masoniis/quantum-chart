<script>
	var basic = 0.9;
	var premium = 1.9;
	var pro = 2.9;
	var currentPlan = 'Monthly';
	var monthlyActive = true;
	var buttonBackground1 = "bg-gray-300";
	var buttonBackground2 = null;
	function handleClick(plan) {
		if (plan === 'monthly') {
			basic = 0.9;
			premium = 1.9;
			pro = 2.9;
			currentPlan = 'Monthly';
			monthlyActive = true;
			buttonBackground1 = "bg-gray-300";
			buttonBackground2 = null;
		} else {
			basic = 9.9;
			premium = 19.9;
			pro = 29.9;
			currentPlan = 'Yearly';
			monthlyActive = false;
			buttonBackground1 = null;
			buttonBackground2 = "bg-gray-300";
		}
	}
	let squareFootage;
</script>

<title>BeyondGreen - Pricing</title>

<main class="min-h-screen bg-light-bg pt-20">
	<h1 class="text-light-text text-center">
		Our prices are always fair and affordable to give your lawn the best care possible
	</h1>
	<br />
	<br />
	<p class="text-center text-orange-700">{currentPlan} Pricing</p>
	<div class="flex justify-center">
		<button
			class="{buttonBackground1} rounded-md border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
			class:active={monthlyActive}
			on:click={() => handleClick('monthly')}
			>Monthly
		</button>
		<button
			class="{buttonBackground2} rounded-md border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
			class:active={!monthlyActive}
			on:click={() => handleClick('yearly')}
			>Yearly
		</button>
	</div>
	<div class="flex text-center justify-center">
		<input style="width:200px" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
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
			${Math.round(basic*squareFootage)}.99
		</div>
		<div style="margin:5px" class="bg-orange-600 rounded-xl w-60">
			Premium<br />
			${Math.round(premium*squareFootage)}.99
		</div>
		<div style="margin:5px" class="bg-red-700 rounded-xl w-60">
			Pro<br />
			${Math.round(pro*squareFootage)}.99
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
	</div>


	<!-- Form Section -->
	<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
	<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
	  <div class="sm:flex sm:flex-col sm:align-center">
		<h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
		<p class="mt-5 text-xl text-gray-500 sm:text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
		<div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
		  <button type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Monthly billing</button>
		  <button type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Yearly billing</button>
		</div>
	  </div>
	  <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
		<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
		  <div class="p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">Hobby</h2>
			<p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
			<p class="mt-8">
			  <span class="text-4xl font-extrabold text-gray-900">$12</span>
			  <span class="text-base font-medium text-gray-500">/mo</span>
			</p>
			<a href="#" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy Hobby</a>
		  </div>
		  <div class="pt-6 pb-8 px-6">
			<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
			<ul role="list" class="mt-6 space-y-4">
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
			  </li>
			</ul>
		  </div>
		</div>
  
		<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
		  <div class="p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">Freelancer</h2>
			<p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
			<p class="mt-8">
			  <span class="text-4xl font-extrabold text-gray-900">$24</span>
			  <span class="text-base font-medium text-gray-500">/mo</span>
			</p>
			<a href="#" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy Freelancer</a>
		  </div>
		  <div class="pt-6 pb-8 px-6">
			<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
			<ul role="list" class="mt-6 space-y-4">
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
			  </li>
			</ul>
		  </div>
		</div>
  
		<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
		  <div class="p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">Startup</h2>
			<p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
			<p class="mt-8">
			  <span class="text-4xl font-extrabold text-gray-900">$32</span>
			  <span class="text-base font-medium text-gray-500">/mo</span>
			</p>
			<a href="#" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy Startup</a>
		  </div>
		  <div class="pt-6 pb-8 px-6">
			<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
			<ul role="list" class="mt-6 space-y-4">
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Faucibus volutpat magna.</span>
			  </li>
			</ul>
		  </div>
		</div>
  
		<div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
		  <div class="p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">Enterprise</h2>
			<p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
			<p class="mt-8">
			  <span class="text-4xl font-extrabold text-gray-900">$48</span>
			  <span class="text-base font-medium text-gray-500">/mo</span>
			</p>
			<a href="#" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy Enterprise</a>
		  </div>
		  <div class="pt-6 pb-8 px-6">
			<h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
			<ul role="list" class="mt-6 space-y-4">
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Faucibus volutpat magna.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Id sed tellus in varius quisque.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Risus egestas faucibus.</span>
			  </li>
  
			  <li class="flex space-x-3">
				<!-- Heroicon name: solid/check -->
				<svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-500">Risus cursus ullamcorper.</span>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</main>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		z-index: 1;
	}

	.centerme {
		margin-left: 90vh;
	}

	.centerflex1 {
		margin-left: 42vh;
	}
	.centerflex2 {
		margin-left: 88.5vh;
	}
	/* .active {
		--tw-border-opacity: 1;
		border-color: rgb(99 102 241 / var(--tw-border-opacity));
	} */
</style>
