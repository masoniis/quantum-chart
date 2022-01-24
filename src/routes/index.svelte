<script>
	import Socialgirl from '../components/Icons/Socialgirl.svelte';
	import Logo from '../components/Logo.svelte';

	let width;

	let squiggle;

	$: {
		if (width < 640) {
			squiggle = true;
		} else {
			squiggle = false;
		}
	}
</script>

<title>Beyondgreen - Home</title>

<svelte:window bind:innerWidth={width} />

<main class="min-h-screen text-maintext overflow-hidden">
	<!-- Section 1 -->
	<section class="relative min-h-screen min-w-screen bg-topsection pt-24 sm:pt-40">
		<div class="max-w-6xl mx-auto xl:px-10 pt-8">
			<grid class="grid grid-cols-3 auto-rows-min items-start justify-center w-full sm:px-8">
				<h1
					class="col-span-3 max-w-xl font-extrabold text-gray-900 sm:leading-none mx-auto text-center text-3xl
					xs:text-4xl
					sm:text-5xl
					md:text-6xl sm:max-w-3xl
					lg:text-7xl lg:mx-0 lg:text-left"
				>
					Not just your ordinary outdoor service
				</h1>
				<!-- {#if squiggle}
					<div class="col-span-3 self-center flex justify-center justify-self-start pt-2 pb-6 z-20">
						<svg
							viewBox="0 0 1480 310"
							xmlns="http://www.w3.org/2000/svg"
							style="vector-effect: non-scaling-stroke;"
						>
							<path
								d="m-2.99994,3c463.50597,367 708.06434,182 752.36473,255c44.30039,73 -176.98353,39 5.41698,-54c182.40051,-93 543.35036,13 746.51432,37"
								opacity="NaN"
								stroke-width="13"
								stroke="#000"
								fill="transparent"
							/>
						</svg>
					</div>
					TEST
				{/if} -->
				{#if squiggle}
					<div class="col-span-3 self-center flex justify-center justify-self-start pt-2 pb-6 z-20">
						<svg
							viewBox="200 0 1200 400"
							xmlns="http://www.w3.org/2000/svg"
							style="vector-effect: non-scaling-stroke; -webkit-transform:translateZ(0)"
						>
							<path
								d="m-2.99994,3c463.50597,367 708.06434,182 752.36473,255c44.30039,73 -176.98353,39 5.41698,-54c182.40051,-93 543.35036,13 746.51432,37"
								opacity="NaN"
								stroke-width="13"
								stroke="#000"
								fill="transparent"
							/>
						</svg>
					</div>
				{/if}
				<h2
					class="col-span-3 mx-auto text-center max-w-xl text-sm px-2
					xs:py-2
					sm:py-2 
					md:py-4 md:text-md
					lg:text-xl lg:max-w-2xl lg:mx-0 lg:text-left"
				>
					Mowing, shoveling, airation, leaf blowing, etc we are very cool basically please buy us
					please please we need u i swear it will be worth
				</h2>

				<form
					class="col-span-3 flex flex-col sm:space-x-4 py-6 items-center container mx-auto z-[2]
					sm:flex-row
					md:max-w-md
					lg:mx-0"
				>
					<input
						type="email"
						id="demo"
						placeholder="Enter Email*"
						class="shadow-lg w-2/3 my-2 text-center focus:ring-emerald-400 focus:border-emerald-500 block border-gray-300 rounded-full scale-75
						sm:text-sm sm:text-left sm:my-0 sm:pl-[1.5rem] sm:scale-100
						md:self-start"
					/>
					<button
						type="submit"
						class="py-2 w-1/3 min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 scale-75
						sm:scale-100
						md:px-2 md:self-start"
					>
						Request a demo
					</button>
				</form>
			</grid>
		</div>

		<!-- Animated Squiggle -->
		<div class="sm:flex hidden pb:12 md:pb-20 4xl:hidden z-[1]
				sm:-mt-8
				md:-mt-20
				lg:mt-0
				xl:-mt-24">
			<svg
				class="h-auto w-auto absolute"
				viewBox="0 0 1480 310"
				xmlns="http://www.w3.org/2000/svg"
				style="vector-effect: non-scaling-stroke;"
			>
				<path
					id="swirl"
					d="m-2.99994,3c463.50597,367 708.06434,182 752.36473,255c44.30039,73 -176.98353,39 5.41698,-54c182.40051,-93 543.35036,13 746.51432,37"
					opacity="NaN"
					stroke-width="12"
					stroke="#000"
					fill="transparent"
				/>
			</svg>
		</div>
	</section>

	<!-- Wave Divider -->
	<div class="topsection-wave bg-mainbg fill-topsection z-[-1]">
		<svg
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

	<!-- Section 2 -->
	<section
		class="container mx-auto grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 p-12"
	>
		<h1 class="md:col-span-3 rows-span-2 text-center text-6xl font-bold py-12">
			This is how it works
		</h1>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Subscribe</h2>
			<p>with a simple process</p>
		</div>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Describe</h2>
			<p>exactly how you want the job done</p>
		</div>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Vibe</h2>
			<p>While your lawn is epic</p>
		</div>
	</section>
</main>

<style>
	.topsection-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.topsection-wave svg {
		position: relative;
		display: block;
		width: calc(122% + 1.3px);
		height: 103px;
	}

	#swirl {
		stroke-dasharray: 2000;
		stroke-dashoffset: 4000;
		animation: dash 10s ease-in-out alternate infinite;
		opacity: 0;
	}

	@keyframes dash {
		from {
			opacity: 0;
		}

		24.9% {
			opacity: 0;
		}

		25% {
			opacity: 1;
			stroke-dashoffset: 6000;
		}

		50% {
			stroke-dashoffset: 4000;
		}

		75% {
			stroke-dashoffset: 2000;
			opacity: 1;
		}

		75.1% {
			opacity: 0;
		}

		to {
			opacity: 0;
		}
	}
</style>
