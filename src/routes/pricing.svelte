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
