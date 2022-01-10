<title>BeyondGreen - Pricing</title>

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
	  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	  padding: 12px 16px;
	  z-index: 1;
	}
	
	.dropdown:hover .dropdown-content {
	  display: block;
	}

	.centerme {
    margin-left: 90vh;
	}

	.centerflex {
		margin-left: 42vh;
	}

	</style>

<script>
	export var basic=9;
	export var premium=19;
	export var pro=29;
	export var currentPlan="Monthly";
	function handleClick(plan){
		if (plan==="monthly") {
			basic=9;
			premium=19;
			pro=29;
			currentPlan="Monthly";
		}
		else{
			basic=99;
			premium=199;
			pro=299;
			currentPlan="Yearly";
		}
	}
</script>

<main class="min-h-screen bg-light-bg">
	<h1 class="text-light-text text-center">Our prices are always fair and affordable to give your lawn the best care possible</h1>
	<br>
	<br>
	<div class="text-center">
		<div class="dropdown">
			<button class="dropbtn" style="color: #ff0000">{currentPlan} Pricing</button>
			<div class="dropdown-content">
			  <button on:click={() => handleClick("monthly")}>Monthly</button><br>
			  <button on:click={() => handleClick("yearly")}>Yearly</button>
			</div>
		  </div>
	</div>
	<br>
	<div class="flex text-center">
		<div class="centerflex flex-none w-60 h-15" style="background: yellow">
		  Basic<br>${basic}.99
		</div>
		<div class="flex-initial w-60 ..." style="background: orange">
		  Premium<br>${premium}.99
		</div>
		<div class="flex-initial w-60 ..." style="background: red">
		  Pro<br>${pro}.99
		</div>
	  </div>
	  </main>
