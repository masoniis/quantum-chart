<script>
	import { companyName, demoModal } from '../stores';
	import { scrollTo, scrollRef, setGlobalOptions } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import { slide, fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import closable from 'svelte-closable';
	import Visibility from '../components/Visibility.svelte';
	import Logo from '../components/Logo.svelte';
	import Backdrop from '../components/Backdrop.svelte';

	setGlobalOptions({
		duration: 400,
		offset: -80,
		easing: cubicInOut
	});

	let intro;

	// Squiggle Animaition Variables
	let width;
	let squiggle;

	$: {
		if (width < 640) {
			squiggle = true;
		} else {
			squiggle = false;
		}
	}

	const words = ['simple', 'amazing', 'efficient', 'immersive', 'awesome'];

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
		intro = true;

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

	let email = '';

	const handleReqDemo = () => {
		$demoModal = true;
		email = '';
	};
</script>

<title>{$companyName} - Home</title>

<svelte:window bind:innerWidth={width} />

{#if $demoModal}
	<Backdrop />
	<modal
		in:slide={{ duration: 500 }}
		out:fade={{ duration: 200 }}
		class="grid grid-cols-1 grid-rows-1 fixed z-[101] h-screen w-full"
	>
		<div class="p-12 justify-self-center self-center">
			<div
				use:closable
				on:outside-click={() => ($demoModal = false)}
				class="bg-zinc-100 max-w-lg p-10 rounded-lg grid grid-cols-2 grid-rows-2"
			>
				<p class="col-span-2 text-center p-2 md:p-4">
					Thanks for your demo request! We will respond with an invitation shortly.
				</p>
				<button
					on:click={() => ($demoModal = false)}
					class="col-span-2 self-center p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Exit
				</button>
			</div>
		</div>
	</modal>
{/if}

<main class="min-h-screen text-maintext overflow-hidden">
	<!-- Section 1 (Landing View) -->
	<section class="min-h-screen min-w-screen bg-topsection pt-24 sm:pt-32">
		{#if intro}
			<div class="max-w-6xl mx-auto xl:px-10 pt-4 relative">
				<grid class="grid grid-cols-1 auto-rows-min w-full sm:px-8">
					<h1
						in:slide={{ duration: 500 }}
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
							in:fly={{ duration: 500, delay: 500, y: 200 }}
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
						in:fly={{ duration: 500, delay: 500, y: 200 }}
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
						on:submit|preventDefault={handleReqDemo}
						in:fly={{ duration: 500, delay: 600, y: 200 }}
						class="col-span-1 justify-self-center flex flex-row gap-2 sm:space-x-4 py-6 z-[2]
					xs:flex-row
					md:max-w-md
					lg:mx-0 lg:justify-self-start"
					>
						<input
							bind:value={email}
							required
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
				class="sm:block hidden 4xl:hidden z-[1000] w-screen lg:scale-y-[-1] -mt-16 lg:-mt-8 lg:scale-x-100 lg:rotate-6"
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
		{/if}
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
		<flex class="flex justify-center md:justify-start md:items-start perspective xl:justify-center">
			<div class="max-w-xl z-[3] feature-grid-text pb-36">
				<h2
					class="font-extrabold tracking-tight py-8 
						text-5xl text-center
						sm:text-5xl sm:px-8
						md:text-6xl md:text-left md:min-w-[38rem] md:px-0"
					style="max-width: 38rem;"
				>
					With {$companyName}, life has never been so
					{#key index}
						<p
							in:fade={{ duration: 400 }}
							class="inline before:content-['['] before:text-maintext after:content-['].'] after:text-maintext"
							style="color: {colors[randColor]}"
						>
							{words[index]}
						</p>
					{/key}
				</h2>
				<p
					class="text-md mx-auto text-center max-w-sm 
						md:mx-0 md:text-left md:text-xl md:max-w-3xl"
				>
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
					<img
						class="rounded-2xl h-[120px]"
						style="background-color: #666766"
						src="low-cost.jpg"
						alt="Low Cost"
					/>
				</button>
				<button
					use:scrollTo={'easy'}
					class="row-span-3 col-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Easy to Use Image -->
					<img
						class="rounded-2xl h-48"
						style="background-color: #666766"
						src="easy-to-use.jpg"
						alt="Easy to Use"
					/>
				</button>
				<button
					use:scrollTo={'risk-free'}
					class="row-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Satisfaction Guarenteed Image -->
					<img
						class="rounded-2xl h-[122px]"
						style="background-color: #666766"
						src="satisfaction-guarenteed.svg"
						alt="Satisfaction Guarenteed"
					/>
				</button>
				<button
					use:scrollTo={'reputable'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Reputable Image -->
					<img
						class="rounded-2xl h-[190px]"
						style="background-color: #666766"
						src="reputable.jpg"
						alt="Reputable"
					/>
				</button>
				<button
					use:scrollTo={'responsive'}
					class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Responsive Image -->
					<img
						class="rounded-2xl h-[191px]"
						style="background-color: #666766"
						src="responsive.jpg"
						alt="Responsive"
					/>
				</button>
				<button
					use:scrollTo={'risk-free'}
					class="col-span-2 row-span-2 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
				>
					<!-- Risk Free Image -->
					<img
						class="rounded-2xl h-[122px]"
						style="background-color: #666766"
						src="risk-free.jpg"
						alt="Risk Free"
					/></button
				>
			</grid>
		</flex>
	</section>

	<!-- EASY (Section 3) -->
	<section use:scrollRef={'easy'} class="container mx-auto pt-12">
		<h1 class="text-center text-6xl font-bold pt-12">This is how it works</h1>

		<grid class="grid grid-cols-1 grid-rows-1 md:grid-cols-3 p-12">
			<div class="text-center">
				<p class="h-24 w-24 mx-auto">
					<Logo />
				</p>
				<h2 class="text-5xl py-4">Subscribe</h2>
				<p>with a simple two-step process</p>
			</div>
			<div class="text-center">
				<p class="h-24 w-24 mx-auto">
					<Logo />
				</p>
				<h2 class="text-5xl py-4">Describe</h2>
				<p>exactly how you want the job done, and we will guarantee your satisfaction</p>
			</div>
			<div class="text-center">
				<p class="h-24 w-24 mx-auto">
					<Logo />
				</p>
				<h2 class="text-5xl py-4">Vibe</h2>
				<p>while exploring all the amazing features offered by {$companyName}</p>
			</div>
		</grid>
	</section>

	<!-- LOW COST (Section 4) -->
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

	<!-- RESPONISVE (Section 7) -->
	<section use:scrollRef={'responsive'} class="">
		<p class="text-center">RESPONSVIE SECITON</p>
	</section>

	<!-- TOP DIVIDER (for reputation section) -->
	<div class="rep-wave fill-lightbg">
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

	<!-- REPUTATION SECTION (Section 7) -->
	<section use:scrollRef={'reputable'} class="py-16 bg-lightbg">
		<flex class="container p-4 md:p-2 mx-auto gap-10 max-w-4xl flex flex-row pb-8">
			<h1
				class="w-1/2 font-bold text-maintext md:my-0 my-auto
					text-3xl
					sm:text-4xl
					md:text-5xl"
			>
				Don't just take our word for it
			</h1>
			<p
				class="w-1/2 font-semibold self-center text-gray-500
					text-md
					md:text-xl"
			>
				No two people have the same goals. Luckily, {$companyName} caters to a plethora of different
				people and situations.
			</p>
		</flex>

		<!-- Hobbyists -->
		<div
			use:scrollRef={'hobbyists'}
			class="container mx-auto max-w-6xl py-12 flex flex-col-reverse md:flex-row"
		>
			<div in:fly={{ duration: 1200, x: -250 }} class="md:w-[60%] flex flex-col gap-6 md:pl-4">
				<blockquote
					class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 md:mx-0 mx-auto md:mt-0 mt-6"
				>
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
				<blockquote
					class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 md:mx-0 mx-auto"
				>
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
								Making charts has been my hobby for a while and {$companyName} is by far the best software
								I've ever used.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Iris Williams <span class="hidden xs:inline text-gray-500"> - Chart Enthusiast</span>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
				<blockquote
					class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 md:mx-0 mx-auto"
				>
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
								{$companyName} has made it so easy to make charts for work presentations!
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Nicholas Carboni <span class="hidden xs:inline text-gray-500">
								- Financial Consultant</span
							>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
				<blockquote
					class="bg-mainbg shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 md:mx-0 mx-auto"
				>
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
								When my teachers ask how I make such good chart graphics, I just show them to this
								software.
							</p>
						</div>

						<h3
							class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
						>
							Victor Appat <span class="hidden xs:inline text-gray-500">
								- High School Student</span
							>
						</h3>
					</div>
					<img
						class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
						alt=""
					/>
				</blockquote>
			</div>
			<flex class="flex flex-row md:flex-col justify-between md:w-[40%] gap-20 ">
				<div class="hidden md:flex flex-col gap-4">
					<button
						use:scrollTo={'hobbyists'}
						class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
					>
						Hobbyists
					</button>
					<button
						use:scrollTo={'CEOs'}
						class="text-left text-gray-400 hover:underline font-semibold"
					>
						CEOs
					</button>
					<button
						use:scrollTo={'developers'}
						class="text-left text-gray-400 hover:underline font-semibold"
					>
						Developers
					</button>
				</div>
				<div class="space-y-4 text-center md:text-left">
					<h1
						class="font-bold text-center md:text-left leading-[1]
							text-4xl
							sm:text-5xl		
							md:text-[3.25rem]"
					>
						Loved by hobbyists around the world
					</h1>
					<p class="text-gray-500 text-center md:text-left">
						Normal people from around the world who use {$companyName} have nothing but love to share
					</p>
					<button
						class="p-2 mx-auto min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
					>
						<a href="/testimonials"> See more testimonials </a>
					</button>
				</div>
			</flex>
		</div>

		<!-- Inbetween Top Divider -->
		<div class="rep-wave fill-gray-200">
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

		<!-- CEO -->
		<div use:scrollRef={'CEOs'} class="bg-gray-200 py-12">
			<div class="container mx-auto max-w-6xl py-12 flex flex-col md:flex-row">
				<flex class="flex flex-col justify-between md:w-[40%] gap-20 md:pl-4">
					<div class="hidden md:flex flex-col gap-4">
						<button
							use:scrollTo={'hobbyists'}
							class="text-left font-semibold text-gray-400 hover:underline"
						>
							Hobbyists
						</button>
						<button
							use:scrollTo={'CEOs'}
							class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
						>
							CEOs
						</button>
						<button
							use:scrollTo={'developers'}
							class="text-left font-semibold text-gray-400 hover:underline"
						>
							Developers
						</button>
					</div>
					<div class="space-y-4">
						<h1
							class="font-bold text-center md:text-left leading-[1]
						text-4xl
						sm:text-5xl		
						md:text-[3.25rem]"
						>
							Respected by hundreds of CEOs
						</h1>
						<p class="text-gray-500 text-center md:text-left">
							It's really no secret, {$companyName} brings many benefits to CEOs and the companies they
							run.
						</p>
					</div>
				</flex>
				<div class="md:w-[60%] ml-0 flex flex-col gap-4 md:pr-4">
					<blockquote
						class="bg-mainbg h-fit shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 self-center md:self-end md:mt-0 mt-6"
					>
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
									I got the starting loan for my company with a presentation make with this
									software. Thank you {$companyName}!
								</p>
							</div>

							<h3
								class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
							>
								Marcus Paslay <span class="hidden xs:inline text-gray-500">
									- CEO of Piattello</span
								>
							</h3>
						</div>
						<img
							class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
							alt=""
						/>
					</blockquote>
					<blockquote
						class="bg-mainbg h-fit shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 self-center md:self-end"
					>
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
									All of my employees are required to learn how to use {$companyName} as one of the first
									parts of their training.
								</p>
							</div>

							<h3
								class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
							>
								Avery Harris <span class="hidden xs:inline text-gray-500">
									- CEO of AmeriGo Finance</span
								>
							</h3>
						</div>
						<img
							class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
							alt=""
						/>
					</blockquote>
					<blockquote
						class="bg-mainbg h-fit shadow-lg rounded-lg flex flex-row justify-between w-[90%] p-2 self-center md:self-end"
					>
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
									{$companyName} makes our workplace more fun with its graphics, animations, and immersive
									AR and VR technology.
								</p>
							</div>

							<h3
								class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
							>
								Carter Wilson <span class="hidden xs:inline text-gray-500">
									- CEO of Grateful Law</span
								>
							</h3>
						</div>
						<img
							class="hidden m-2 sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
							alt=""
						/>
					</blockquote>
				</div>
			</div>
		</div>

		<!-- Inbetween Bottom Divider -->
		<div class="rep-wave2 fill-gray-200">
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

		<!-- Developer -->
		<div use:scrollRef={'developers'} class="bg-lightbg pt-12">
			<div class="container mx-auto py-12 flex flex-col-reverse md:flex-row max-w-6xl">
				<div class="md:w-[60%] flex flex-col justify-between md:mt-0 mt-6">
					<blockquote
						class="grid grid-cols-4 bg-white shadow-lg md:mr-8 w-[90%] rounded-md self-center"
					>
						<div class="py-6 text-center border-r-2">
							<div class="order-1 text-5xl font-extrabold text-indigo-600">99%</div>
							<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Satisfaction</dt>
						</div>
						<p class="col-span-3 pl-4 self-center text-[1rem]">
							"This chart software is so great, I was able to implement it in my portfolio for
							extremely impressive animations using the API!" - John Mark
						</p>
					</blockquote>
					<blockquote
						class="grid grid-cols-4 bg-white shadow-lg md:mr-8 my-6 w-[90%] rounded-md self-center"
					>
						<div class="py-6 text-center border-r-2">
							<div class="order-1 text-5xl font-extrabold text-indigo-600">24/7</div>
							<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Support</dt>
						</div>
						<p class="col-span-3 pl-4 self-center">I AM THE QUOTE</p>
					</blockquote>
					<blockquote
						class="grid grid-cols-4 bg-white shadow-lg md:mr-8 w-[90%] rounded-md self-center"
					>
						<div class="py-6 text-center border-r-2">
							<div class="order-1 text-5xl font-extrabold text-indigo-600 ">190k</div>
							<dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Users</dt>
						</div>
						<p class="col-span-3 pl-4 self-center">I AM THE QUOTE</p>
					</blockquote>
				</div>
				<flex class="flex flex-col justify-between md:w-[40%] gap-20">
					<div class="hidden md:flex flex-col gap-4">
						<button
							use:scrollTo={'hobbyists'}
							class="text-left font-semibold text-gray-400 hover:underline"
						>
							Hobbyists
						</button>
						<button
							use:scrollTo={'CEOs'}
							class="text-left font-semibold text-gray-400 hover:underline"
						>
							CEOs
						</button>
						<button
							use:scrollTo={'developers'}
							class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
						>
							Developers
						</button>
					</div>
					<div class="space-y-4">
						<h1
							class="font-bold text-center md:text-left leading-[1]
						text-4xl
						sm:text-5xl		
						md:text-[3.25rem]"
						>
							Certified by developers
						</h1>
						<p class="text-gray-500 text-center md:text-left">
							With our custom API, 24/7 support, and large user-base, Quantum Chart makes it a
							breeze for developers to implement and deploy simple and immersive charts into their
							working environment.a
						</p>
					</div>
				</flex>
			</div>
		</div>
	</section>

	<!-- BOTTOM DIVIDER (for reputation section) -->
	<div class="rep-wave2 fill-lightbg">
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

	<!-- RISK FREE and SATISFACTION (Section 8) -->
	<section use:scrollRef={'risk-free'} class="pt-24 pb-48">
		<div class="container mx-auto flex flex-col md:flex-row gap-8 justify-center">
			<!-- Risk free box -->
			<div class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50">
				<!-- Flex Item 1 -->
				<h1 class="text-xl font-bold px-10 py-10">Getting started is 100% risk-free</h1>

				<!-- Flex item 2 -->
				<ul class="text-left ml-6 mb-10">
					<li>No credit card info</li>
					<li>No commitments</li>
					<li>14 days to try it out</li>
				</ul>

				<!-- Flex item 3 -->
				<div class="inline-flex rounded-md shadow mx-auto mb-10">
					<a
						href="/pricing"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Start your free trial
					</a>
				</div>
			</div>

			<!-- Satisfaction guarenteed section -->
			<div
				class="flex flex-col max-w-sm px-2 md:pl-8 self-center md:self-end border-t-2 translate-y-8 md:border-0 mt-6 border-black"
				in:fly={{ duration: 1400, x: 700 }}
			>
				<h1 class="text-xl font-bold pb-3 pt-4">Satisfaction Guaranteed</h1>
				<div>
					<div
						class="text-mainlink text-lg font-medium"
						>Money back</div
					>
					<p class="pb-4">If you decide to purchase a subscrition and find it's not what you thought, we offer 100% of your money back.</p>
				</div>

				<div class="py-4 mb-4 border-y-[1px] border-black">
					<div
						class="text-mainlink text-lg font-medium"
						>Live support</div
					>
					<p>Our live support can help you fix any issues you are having on the spot.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- TOP DIVIDER (for start now section) -->
	<div class="start-now-topwave fill-lightbg">
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

	<!-- START NOW (Section 9) -->
	<section class="bg-lightbg py-16">
		<div class="text-center px-4">
			<h1
				class="font-bold text-maintext pb-4
					text-4xl
					xs:text-5xl
					md:text-6xl 
					lg:text-7xl"
			>
				Try {$companyName} On Us
			</h1>
			<p
				class="text-gray-500 max-w-3xl mx-auto
					text-md	
					lg:text-lg"
			>
				Start a no-commitment 14 day free trial. No credit card required! Once the trial is up, you
				get to decide whether {$companyName} is right for you.
			</p>
			<div class="inline-flex rounded-md shadow mx-auto pt-4 mt-4">
				<a
					href="/pricing"
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
				>
					Start your free trial
				</a>
			</div>
		</div>
	</section>

	<!-- BOTTOM DIVIDER (for start now section) -->
	<div class="start-now-bottomwave fill-lightbg">
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
</main>

<style>
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

	.rep-wave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.rep-wave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 24px;
	}

	.rep-wave2 {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.rep-wave2 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 24px;
	}

	.start-now-bottomwave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.start-now-bottomwave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 133px;
	}

	.start-now-topwave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.start-now-topwave svg {
		position: relative;
		display: block;
		width: calc(161% + 1.3px);
		height: 76px;
	}
</style>
