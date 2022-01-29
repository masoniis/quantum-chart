<script>
	import Logo from '../components/Logo.svelte';
	import { companyName } from '../stores';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import { slide, fade, fly } from 'svelte/transition';
	import tilt from '../components/tilt';

	let width;

	let squiggle;

	$: {
		if (width < 640) {
			squiggle = true;
		} else {
			squiggle = false;
		}
	}

	const words = ['simple', 'amazing', 'awesome', 'mason', 'efficient'];

	const colors = [
		'#90afe0', //Light Blue
		'#d2a3d9', //Light Purple
		'#ed8798', //Light Red
		'#a2d19f', //Seafoam Green
		'#dbd39e', //Tan or Light Yellow
		'#b3e6db' //Light Cyan
	];

	const randomColor = () => {
		return Math.round(Math.random() * (colors.length - 1));
	};

	let index = 0;
	let randColor = randomColor();

	onMount(() => {
		const interval = setInterval(() => {
			// Set `randIndex` to a new value each interval.
			index = index + 1;
			randColor = randomColor();
			if (index > words.length - 1) {
				index = 0;
			}
		}, 2400);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<title>{$companyName} - Home</title>

<svelte:window bind:innerWidth={width} />

<main class="min-h-screen text-maintext overflow-hidden">
	<!-- Section 1 -->
	<section class="min-h-screen min-w-screen bg-topsection pt-24 sm:pt-32">
		<div class="max-w-6xl mx-auto xl:px-10 pt-4 relative">
			<grid class="grid grid-cols-1 auto-rows-min w-full sm:px-8">
				<h1
					class="col-span-1 max-w-lg font-extrabold text-gray-900 sm:leading-none mx-auto text-center text-3xl
					xs:text-4xl
					sm:text-5xl sm:max-w-3xl
					md:text-6xl md:max-w-4xl
					lg:text-7xl lg:mx-0 lg:text-left"
				>
					Not just your ordinary chart software
				</h1>
				{#if squiggle}
					<div
						class="col-span-1 row-span-1 flex justify-center mb-0 2xs:mb-4 xs:mb-10 py-8 object"
						style="-webkit-transform:translateZ(1px); clear:both;"
					>
						<svg
							class="relative child"
							viewBox="200 110 1200 200"
							xmlns="http://www.w3.org/2000/svg"
							style="vector-effect: non-scaling-stroke; -webkit-transform:translateZ(1px); clear:both;"
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
					class="col-span-1 mx-auto text-center max-w-xl text-sm px-2
					xs:py-2
					sm:py-2 
					md:py-4 md:text-md
					lg:text-xl lg:max-w-2xl lg:mx-0 lg:text-left"
				>
					Mowing, shoveling, airation, leaf blowing, etc we are very cool basically please buy us
					please please we need u i swear it will be worth
				</h2>

				<form
					class="col-span-1 justify-self-center flex flex-row gap-2 sm:space-x-4 py-6 z-[2]
					xs:flex-row
					md:max-w-md
					lg:mx-0 lg:justify-self-start"
				>
					<input
						type="email"
						id="demo"
						placeholder="Enter Email*"
						class="shadow-lg contianer mx-auto my-2 text-center focus:ring-emerald-400 focus:border-emerald-500 block border-gray-300 rounded-full scale-75
						2xs:text-sm 2xs:text-left 2xs:my-0 2xs:pl-[1.3rem] 2xs:scale-100 2xs:w-3/4
						sm:mr-0
						md:self-start"
					/>
					<button
						type="submit"
						class="py-2 contianer mx-auto min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 scale-75
						2xs:w-1/4 2xs:scale-100
						md:px-2 md:self-start"
					>
						Request a demo
					</button>
				</form>
			</grid>
		</div>

		<!-- Animated Squiggle -->
		<div
			class="md:block hidden 4xl:hidden z-[1000] w-screen lg:scale-y-[-1] -mt-16 lg:-mt-8 lg:scale-x-100 lg:rotate-6"
		>
			<svg
				class=""
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
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>

	<!-- Section 2 -->
	<section class="container mx-auto my-24 pt-12">
		<flex class="hero__flex perspective xl:justify-center mx-8 border-t-2 pt-16 border-black">
			<div class="max-w-xl z-[3] feature-grid-text pb-36">
				<h2
					class="text-6xl font-extrabold tracking-tight py-8"
					style="min-width: 38rem; max-width: 38rem;"
				>
					With {$companyName}, life has never been so [
					{#key index}
						<p in:fade={{ duration: 400 }} class="inline" style="color: {colors[randColor]}">
							{words[index]}
						</p>
					{/key}
					].
				</h2>
				<p class="text-xl">
					incredible prices, great prices, low prices, and perfect prices, {$companyName} is a service
					like no other.
				</p>

				<div class="pt-8">
					<button> Button 1 </button>
					<button> Button 1 </button>
				</div>
			</div>

			<!-- 3d Panel -->
			<grid
				class="hidden md:grid grid-cols-4 grid-rows-5 origin-center feature-grid w-[40rem] mr-12 mt-20 space-x-4 space-y-4"
			>
				<button
					use:scrollTo={'easy-section'}
					class="row-span-2 bg-gray-200 border mt-4 ml-4 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.05]"
				>
					<!-- Low Cost Image -->
					<img class="rounded-2xl h-full" src="low-cost.jpg" alt="Low Cost" />
				</button>
				<button
					use:scrollTo={'easy-section'}
					class="row-span-3 col-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Easy to Use Image -->
					<img class="rounded-2xl h-full" src="../static/easy.jpg" alt="Easy to Use" />
				</button>
				<button
					use:scrollTo={'easy-section'}
					class="row-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Satisfaction Guarenteed Image -->
					<img
						class="rounded-2xl h-full"
						src="../static/satisfaction-guarenteed.jpg"
						alt="Satisfaction Guarenteed"
					/>
				</button>
				<button
					use:scrollTo={'reputation-section'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Reputable Image -->
					<img class="rounded-2xl h-full" src="../static/reputable.jpg" alt="Reputable" />
				</button>
				<button
					use:scrollTo={'professional-section'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Responsive Image -->
					<img class="rounded-2xl h-full" src="../static/responsive.jpg" alt="Responsive" />
				</button>
				<button
					use:scrollTo={'responsive-section'}
					class="col-span-2 row-span-2 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Risk Free Image -->
					<img class="rounded-2xl h-full" src="../static/risk-free.jpg" alt="Risk Free" /></button
				>
			</grid>
		</flex>
	</section>

	<!-- Section 3 -->
	<section
		use:scrollRef={'easy-section'}
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
			<p>with a simple 16 step process</p>
		</div>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Describe</h2>
			<p>exactly how you want the job done, and we will guartntee your satisfaction</p>
		</div>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Vibe</h2>
			<p>inside while all the work is done by us on the outside</p>
		</div>
	</section>

	<!-- Section 4 -->
	<section use:scrollRef={'reputation-section'} class="m-72">
		<p class="text-center">Trusted by people and stuff</p>
		<div class="bg-gray-50 pt-12 sm:pt-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto text-center">
					<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Trusted by developers from over 80 planets
					</h2>
					<p class="mt-3 text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat
						laudantium.
					</p>
				</div>
			</div>
			<div class="mt-10 pb-12 bg-white sm:pb-16">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 bg-gray-50" />
					<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="max-w-4xl mx-auto">
							<dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
								<div
									class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
								>
									<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
										Pepperoni
									</dt>
									<dd class="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
								</div>
								<div
									class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
								>
									<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
									<dd class="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
								</div>
								<div
									class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
								>
									<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
									<dd class="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Section 4 -->
	<section use:scrollRef={'professional-section'} class="m-72">
		<p class="text-center">PROFESSION SECITON</p>
	</section>

	<!-- Section 4 -->
	<section use:scrollRef={'responsive-section'} class="m-72">
		<p class="text-center">RESPONSVIE SECITON</p>
	</section>

	<!-- Section 5 -->
	<section use:scrollRef={'responsive-section'} class="m-72">
		<h1 class="text-center text-4xl font-bold">100% risk-free</h1>

		<p>
			When you start a free {$companyName} trial, there is no need to put in credit card detials or any
			commitment. After the trial is up, you can decide if {$companyName} is right for you. As simple
			as that!
		</p>
	</section>

	<!-- Section 6 -->
	<section class="bg-indigo-50">
		<div
			class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
		>
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
				<span class="block">Ready to dive in?</span>
				<span class="block text-indigo-600">Start your free trial today.</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<a
						href="#"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Get started
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.hero__flex {
		height: 60vh;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
	}

	.feature-grid-text {
		background: linear-gradient(90deg, rgb(255, 255, 255) 83%, rgba(255, 255, 255, 0));
	}

	.feature-grid {
		position: relative;
		min-height: 15rem;
		min-width: 40rem;
		z-index: 1;

		transform-style: preserve-3d;
		transform-origin: left;

		transform: perspective(100rem) rotateY(-50deg) rotateX(0deg) rotateZ(0deg) translateZ(0)
			translateX(70px);

		left: min(calc(1200px - 100vw) * -1, 0px);
	}

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
		animation: dash 9s ease-in-out alternate infinite;
		opacity: 0;
	}

	@keyframes dash {
		from {
			opacity: 0;
		}

		19.9% {
			opacity: 0;
		}

		20% {
			opacity: 1;
			stroke-dashoffset: 6000;
		}

		50% {
			stroke-dashoffset: 4000;
		}

		80% {
			stroke-dashoffset: 2000;
			opacity: 1;
		}

		80.1% {
			opacity: 0;
		}

		to {
			opacity: 0;
		}
	}

	.object {
		width: 100%;
		display: block;
		height: auto;
		position: relative;
	}

	.child {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
