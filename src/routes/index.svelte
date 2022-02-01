<script>
	import Logo from '../components/Logo.svelte';
	import { companyName } from '../stores';
	import { scrollTo, scrollRef, setGlobalOptions } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import { slide, fade, fly } from 'svelte/transition';
	import { cubicIn, cubicInOut } from 'svelte/easing';

	setGlobalOptions({
		duration: 400,
		offset: -80,
		easing: cubicInOut
	});

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
	<!-- Section 1 (Landing View) -->
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
					Any chart at the tip of your fingers. With the capability to immerse yourself inside the
					data through virtual reality, there truly is no limit.
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

	<!-- Section 2 (Navigation Section) -->
	<section class="container mx-auto my-24">
		<flex class="hero__flex perspective xl:justify-center mx-8">
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
					use:scrollTo={'low-cost'}
					class="row-span-2 bg-gray-200 border mt-4 ml-4 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.05]"
				>
					<!-- Low Cost Image -->
					<img class="rounded-2xl h-[120px]" src="low-cost.jpg" alt="Low Cost" />
				</button>
				<button
					use:scrollTo={'easy'}
					class="row-span-3 col-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Easy to Use Image -->
					<img class="rounded-2xl h-48" src="easy.jpg" alt="Easy to Use" />
				</button>
				<button
					use:scrollTo={'satisfaction-guarenteed'}
					class="row-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Satisfaction Guarenteed Image -->
					<img
						class="rounded-2xl h-[122px]"
						src="satisfaction-guarenteed.jpg"
						alt="Satisfaction Guarenteed"
					/>
				</button>
				<button
					use:scrollTo={'reputable'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Reputable Image -->
					<img class="rounded-2xl h-[190px]" src="reputable.jpg" alt="Reputable" />
				</button>
				<button
					use:scrollTo={'responsive'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Responsive Image -->
					<img class="rounded-2xl h-[191px]" src="responsive.jpg" alt="Responsive" />
				</button>
				<button
					use:scrollTo={'risk-free'}
					class="col-span-2 row-span-2 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.1]"
				>
					<!-- Risk Free Image -->
					<img class="rounded-2xl h-[122px]" src="risk-free.jpg" alt="Risk Free" /></button
				>
			</grid>
		</flex>
	</section>

	<!-- Section 3 (Easy Section) -->
	<section use:scrollRef={'easy'} class="container mx-auto my-24 pt-12">
		<h1 class="md:col-span-3 rows-span-2 text-center text-6xl font-bold py-12">
			This is how it works
		</h1>

		<grid class="grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 p-12">
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
		</grid>
	</section>

	<!-- Section 4 (Reputation Section) -->
	<section use:scrollRef={'reputable'} class="pt-12">
		<flex class="container mx-auto gap-10 max-w-4xl flex flex-row pb-8">
			<h1 class="w-1/2 font-bold text-5xl">Loved by those who use it</h1>
			<p class="w-1/2 font-semibold text-xl self-center">
				No two people have the same goals, luckily {$companyName} caters to a plethora of different people
				and situations.
			</p>
		</flex>

		<!-- Hobbyists -->
		<div use:scrollRef={'hobbyists'} class="container mx-auto max-w-6xl py-12 flex flex-row">
			<div class="w-[60%] flex flex-col gap-6">
				<blockquote class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2">
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
								I love to play around with {$companyName} in my free time, it's just so satisfying.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
				<blockquote class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2">
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
								I love to play around with {$companyName} in my free time, it's just so satisfying.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
				<blockquote class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2">
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
								I love to play around with {$companyName} in my free time, it's just so satisfying.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Jane Cooper <span class="hidden xs:inline text-gray-500"> - Happy Neighbor</span>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
			</div>
			<flex class="flex flex-col justify-between w-[40%] gap-20 ">
				<div class="flex flex-col gap-4">
					<button
						use:scrollTo={'hobbyists'}
						class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
					>
						Hobbyists
					</button>
					<button use:scrollTo={'CEOs'} class="text-left text-gray-400 hover:underline font-semibold"> CEOs </button>
					<button use:scrollTo={'developers'} class="text-left text-gray-400 hover:underline font-semibold">
						Developers
					</button>
				</div>
				<h1 class="font-bold text-5xl">Certified by hobbyists abroad</h1>
			</flex>
		</div>

		<!-- CEO -->
		<div use:scrollRef={'CEOs'} class="bg-gray-300 py-12">
			<div class="container mx-auto py-12 flex flex-row">
				<div class="w-[60%]">
					Bruhlaksjdlkasjdlkjasdlkjasdkljjaslkdjlaksjdlkajsdlkajsslkjlkjlkjasd
				</div>
				<flex class="flex flex-col justify-between w-[40%] gap-20">
					<div class="flex flex-col gap-4">
						<button use:scrollTo={'hobbyists'} class="text-left font-semibold text-gray-400 hover:underline">
							Hobbyists
						</button>
						<button
							use:scrollTo={'CEOs'}
							class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
						>
							CEOs
						</button>
						<button use:scrollTo={'developers'} class="text-left font-semibold text-gray-400 hover:underline">
							Developers
						</button>
					</div>
					<h1 class="font-bold text-5xl">Certified by CEOs abroad</h1>
				</flex>
			</div>
		</div>

		<!-- Developer -->
		<div use:scrollRef={'developers'} class="bg-gray-200 py-12">
			<div class="container mx-auto py-12 flex flex-row">
				<div class="w-[60%]">
					<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="max-w-4xl mx-auto text-center">
							<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Trusted by developers of over 80,000 different applications
							</h2>
							<p class="mt-3 text-xl text-gray-500 sm:mt-4">
								Far and abroad, developers love to use {$companyName} in their workplace for productivity
								and data display.
							</p>
						</div>
					</div>
					<div class="mt-10 pb-12 sm:pb-16">
						<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div class="max-w-4xl mx-auto">
								<dl class="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
									<div
										class="flex flex-col border-b p-6 text-center sm:border-0 sm:border-r bg-mainbg"
									>
										<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
											Reliable
										</dt>
										<dd class="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
									</div>
									<div
										class="flex flex-col border-t border-b border-gray-100 bg-mainbg p-6 text-center sm:border-0 sm:border-l sm:border-r"
									>
										<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
											Support
										</dt>
										<dd class="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
									</div>
									<div
										class="flex flex-col border-t border-gray-100 bg-mainbg p-6 text-center sm:border-0 sm:border-l"
									>
										<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Users</dt>
										<dd class="order-1 text-5xl font-extrabold text-indigo-600">190k</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
				<flex class="flex flex-col justify-between w-[40%] gap-20">
					<div class="flex flex-col gap-4">
						<button use:scrollTo={'hobbyists'} class="text-left font-semibold text-gray-400 hover:underline">
							Hobbyists
						</button>
						<button use:scrollTo={'CEOs'} class="text-left font-semibold text-gray-400 hover:underline"> CEOs </button>
						<button
							use:scrollTo={'developers'}
							class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
						>
							Developers
						</button>
					</div>
					<h1 class="font-bold text-5xl">Certified by developers abroad</h1>
				</flex>
			</div>
		</div>
	</section>

	<!-- Section 5 (Perks) -->
	<section class="m-72" />

	<section use:scrollRef={'low-cost'} class="container mx-auto">
		<h1 class="text-center text-4xl pb-8">Always at your side</h1>

		<grid class="grid grid-cols-4 grid-rows-1 gap-7">
			<div
				class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
				in:fly={{ duration: 1400, x: -700 }}
			>
				<h1 class="font-bold text-lg px-10 py-10 ">Cool Stuff</h1>
				<div class="px-10 pb-10">Like this</div>
			</div>

			<div
				class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
				in:fly={{ duration: 1400, x: -700 }}
			>
				<h1 class="font-bold text-lg px-10 py-10 ">export as interactive md</h1>
				<div class="px-10 pb-10">Like this</div>
			</div>

			<div
				class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
				in:fly={{ duration: 1400, x: -700 }}
			>
				<h1 class="font-bold text-lg px-10 py-10 ">Cool equations</h1>
				<div class="px-10 pb-10">Like this</div>
			</div>

			<div
				class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
				in:fly={{ duration: 1400, x: -700 }}
			>
				<h1 class="font-bold text-lg px-10 py-10 ">Ar and VR</h1>
				<div class="px-10 pb-10">Like this</div>
			</div>
		</grid>

		<h2 class="text-center text-2xl pt-8">Prices starting at $2.95/month, cancel anytime</h2>

		<div class="rounded-md text-center pt-8">
			<a
				href="/pricing"
				class="px-5 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
			>
				Get started
			</a>
		</div>
	</section>

	<!-- Section 6 -->
	<section use:scrollRef={'satisfaction-guarenteed'} class="m-72">
		<p class="text-center">PROFESSION SECITON</p>
	</section>

	<!-- Section 7 -->
	<section use:scrollRef={'responsive'} class="m-72">
		<p class="text-center">RESPONSVIE SECITON</p>
	</section>

	<!-- Section 8 (Risk Free Section) -->
	<section use:scrollRef={'risk-free'} class="m-72">
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
						href="/pricing"
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
