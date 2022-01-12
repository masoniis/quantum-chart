<script>
	var basic = 9;
	var premium = 19;
	var pro = 29;
	var currentPlan = 'Monthly';
	var monthlyActive = true;
	var buttonBackground1 = "bg-gray-300";
	var buttonBackground2 = null;
	function handleClick(plan) {
		if (plan === 'monthly') {
			basic = 9;
			premium = 19;
			pro = 29;
			currentPlan = 'Monthly';
			monthlyActive = true;
			buttonBackground1 = "bg-gray-300";
			buttonBackground2 = null;
		} else {
			basic = 99;
			premium = 199;
			pro = 299;
			currentPlan = 'Yearly';
			monthlyActive = false;
			buttonBackground1 = null;
			buttonBackground2 = "bg-gray-300";
		}
	}
</script>

<title>BeyondGreen - Pricing</title>

<main class="min-h-screen bg-light-bg">
	<h1 class="text-light-text text-center">
		Our prices are always fair and affordable to give your lawn the best care possible
	</h1>
	<br />
	<br />
	<!--Dropdown Menu-->
	<!-- <div class="text-center">
		<div class="dropdown">
			<button class="dropbtn" style="color: #ff0000">{currentPlan} Pricing</button>
			<div class="dropdown-content">
			  <button on:click={() => handleClick("monthly")}>Monthly</button><br>
			  <button on:click={() => handleClick("yearly")}>Yearly</button>
			</div>
		  </div>
	</div> -->
	<p class="text-center text-orange-700">{currentPlan} Pricing</p>
	<div class="flex text-center">
		<div class="centerflex2 h-10">
			<button
				class="{buttonBackground1} border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				class:active={monthlyActive}
				on:click={() => handleClick('monthly')}
				>Monthly
			</button>
		</div>
		<div class="background-red-50">
			<button
				class="{buttonBackground2} border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				class:active={!monthlyActive}
				on:click={() => handleClick('yearly')}
				>Yearly
			</button>
		</div>
	</div>
	<div class="flex text-center">
		<div class="centerflex1 flex-none w-60 h-15" style="background: yellow">
			Basic<br />${basic}.99
		</div>
		<div class="flex-initial w-60 ..." style="background: orange">
			Premium<br />${premium}.99
		</div>
		<div class="flex-initial w-60 ..." style="background: red">
			Pro<br />${pro}.99
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

	.dropdown:hover .dropdown-content {
		display: block;
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
