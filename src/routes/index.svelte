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

<title>BeyondGreen - Home</title>

<svelte:window bind:innerWidth={width} />

<main class="min-h-screen text-maintext overflow-hidden">
	<!-- Section 1 -->
	<section class="relative min-w-screen bg-topsection pt-24 sm:pt-40">
		<div class="max-w-6xl px-12 mx-auto xl:px-10 pt-8 pb-32">
			<grid class="grid grid-cols-3 grid-rows-4 items-start justify-center w-full">
				<h1
					class="col-span-3 max-w-4xl font-extrabold text-gray-900 sm:leading-none mx-auto text-center text-3xl 
					xs:text-4xl
					sm:text-5xl
					md:text-6xl md:pb-0
					lg:text-7xl lg:mx-0 lg:text-left"
				>
					Not just your ordinary landscape service
				</h1>
				{#if squiggle}
					<div class="col-span-3 row-span-1 flex justify-center -mt-[2rem] my-12">
						<svg
							class="absolute"
							viewBox="200 0 1200 400"
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
				{/if}
				<h2
					class="col-span-3 mx-auto text-center max-w-xl text-sm 
					xs:pt-6
					sm:pt-6 
					md:pt-8 md:text-md
					lg:text-xl lg:max-w-2xl lg:mx-0 lg:text-left"
				>
					Mowing, shoveling, airation, leaf blowing, etc we are very cool basically please buy us
					please please we need u i swear it will be worth
				</h2>

				<form
					class="col-span-3 flex flex-col sm:space-x-4 pb-12 h-24 items-center container mx-auto
					sm:flex-row
					md:max-w-md
					lg:mx-0"
				>
					<input
						type="email"
						id="demo"
						placeholder="Enter Email*"
						class="shadow-lg w-2/3 my-2 text-center focus:ring-emerald-400 focus:border-emerald-500 block border-gray-300 rounded-full
						sm:text-sm sm:text-left sm:my-0 sm:pl-[1.5rem]
						md:self-start"
					/>
					<button
						type="submit"
						class="py-2 w-1/3 min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400
						md:px-2 md:self-start"
					>
						Request a demo
					</button>
				</form>
			</grid>
		</div>

		<!-- Animated Squiggle -->
		<div class="sm:flex justify-center hidden mt-20 pb:12 md:pb-20">
			<svg
				class="h-auto w-auto absolute -mt-[36rem] sm:-mt-[16rem]  md:-mt-[20rem]"
				viewBox="0 0 1480 400"
				xmlns="http://www.w3.org/2000/svg"
				style="vector-effect: non-scaling-stroke;"
			>
				<path
					id="swirl"
					d="m-2.99994,3c463.50597,367 708.06434,182 752.36473,255c44.30039,73 -176.98353,39 5.41698,-54c182.40051,-93 543.35036,13 746.51432,37"
					opacity="NaN"
					stroke-width="4"
					stroke="#000"
					fill="transparent"
				/>
			</svg>
		</div>

		<!-- Wave Divider -->
		<div class="topsection-wave bg-mainbg fill-topsection">
			<svg
				data-name="Layer 1"
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
	</section>

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
			<h2 class="text-5xl py-4">Convey</h2>
			<p>to us your needs and wants</p>
		</div>
		<div class="text-center">
			<p class="h-24 w-24 mx-auto">
				<Logo />
			</p>
			<h2 class="text-5xl py-4">Relax</h2>
			<p>While your lawn is epic</p>
		</div>
	</section>
</main>

<style>
	mark {
		background-image: url('data:image/svg+xlm,%3Csvg%20width%3D%22421%22%20height%3D%22248%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%20%3Cg%20id%3D%22Layer_1%22%3E%0A%20%20%3Ctitle%3ELayer%201%3C%2Ftitle%3E%0A%20%20%3Cpath%20stroke-width%3D%226%22%20d%3D%22m217.5%2C168.91222c-1%2C0%20-1.69344%2C0.4588%20-3%2C1c-2.77164%2C1.14806%20-7.8981%2C2.39902%20-15%2C4c-17.80156%2C4.01302%20-24.95332%2C4.49904%20-33%2C5c-7.98454%2C0.4971%20-23.08443%2C0.47472%20-30%2C-1c-7.12003%2C-1.51831%20-14.37421%2C-3.94138%20-27%2C-9c-6.227%2C-2.49489%20-12.11824%2C-5.85652%20-17%2C-10c-10.25708%2C-8.70587%20-15.74269%2C-12.49348%20-21%2C-21c-1.17557%2C-1.90211%20-2%2C-5%20-2%2C-12c0%2C-3%20-0.08676%2C-6.03308%203%2C-14c1.94554%2C-5.02144%205.83227%2C-9.34211%2012%2C-18c4.67781%2C-6.56644%2014%2C-18%2019%2C-22c5%2C-4%2018.14183%2C-13.76142%2025%2C-18c9.2012%2C-5.68665%2026.78793%2C-13.57749%2037%2C-17c10.81076%2C-3.62316%2031.00565%2C-6.94507%2041%2C-8c9.00536%2C-0.95053%2029%2C-3%2040%2C-3c10%2C0%2020.1015%2C-1.85498%2037%2C0c9.16449%2C1.00601%2017.198%2C4.63297%2023%2C8c12.47391%2C7.23889%2017.44751%2C12.49725%2022%2C17c10.10495%2C9.99451%2010.79395%2C15.08744%2013%2C20c1.83203%2C4.07966%204.49829%2C15.93797%205%2C22c0.57736%2C6.97615%20-1.5253%2C21.08443%20-3%2C28c-1.51831%2C7.12003%20-6.14774%2C17.94341%20-8%2C23c-2.17538%2C5.93866%20-15.99377%2C22.34715%20-33%2C34c-19.95221%2C13.67148%20-73%2C36%20-99%2C43l-21%2C2%22%20id%3D%22svg_3%22%20stroke%3D%22%23000%22%20fill%3D%22none%22%2F%3E%0A%20%3C%2Fg%3E%0A%3C%2Fsvg%3E');
		background-size: 100% 100%;
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
		stroke-dashoffset: 0;
		animation: dash 10s ease-in-out alternate infinite;
		animation-delay: 10s;
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
			stroke-dashoffset: 2000;
		}

		50% {
			stroke-dashoffset: 0;
		}

		75% {
			stroke-dashoffset: -2000;
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
