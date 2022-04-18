<script>
	import { companyName } from '$stores';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import { fly } from 'svelte/transition';
	import Blockquote from '$components/Blockquote.svelte';
	import IndexDividers from './IndexDividers.svelte'
</script>

<IndexDividers type="reputation.top" />

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
			No two people have the same goals. Luckily, {$companyName} caters to a plethora of different people
			and situations.
		</p>
	</flex>

	<!-- Hobbyists -->
	<div
		use:scrollRef={'hobbyists'}
		class="container mx-auto max-w-6xl py-12 flex flex-col-reverse md:flex-row"
	>
		<div in:fly={{ duration: 1200, x: -250 }} class="md:w-[60%] flex flex-col gap-6 md:pl-4">
			<Blockquote src={'people/jane.jpg'} classes="w-[92%] self-center md:self-start mt-8 md:mt-0">
				<span slot="quote">
					I love to play around with {$companyName} in my free time, it's just so satisfying!
				</span>

				<span slot="person"> Jane Cooper </span>

				<span slot="reference"> Coding Enthusiast </span>
			</Blockquote>
			<Blockquote src={'people/nicholas.jpg'} class="bg-black" classes="w-[92%] self-center md:self-start">
				<span slot="quote">
					Making charts has been my hobby for a while and {$companyName} is by far the best software
					I've ever used.
				</span>

				<span slot="person"> Nicholas Carboni </span>

				<span slot="reference"> Financial Consultant </span>
			</Blockquote>
				<Blockquote src={'people/iris.jpg'} classes="w-[92%]">
					<span slot="quote">
						{$companyName} has made it so easy to make charts for work presentations!
					</span>

					<span slot="person"> Iris Williams </span>

					<span slot="reference"> Chart Enthusiast </span>
				</Blockquote>
			<Blockquote src={'people/victor.jpg'} classes="w-[92%] self-center md:self-start">
				<span slot="quote">
					When my professors ask how I make such good charts, I just show them to this software.
					It's also very easy to use!
				</span>

				<span slot="person"> Victor Appat </span>

				<span slot="reference"> College Student </span>
			</Blockquote>
		</div>
		<flex class="flex flex-row md:flex-col justify-between md:w-[40%] gap-20 ">
			<div class="hidden md:flex flex-col gap-4">
				<button
					use:scrollTo={'hobbyists'}
					class="text-left hover:underline font-semibold decoration-emerald-700 text-emerald-700"
				>
					Hobbyists
				</button>
				<button use:scrollTo={'CEOs'} class="text-left text-gray-400 hover:underline font-semibold">
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
					<button
					class="p-2 mx-auto min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
					>
					<a href="/testimonials"> See more testimonials </a>
					</button>
				</div>
			</flex>
			<div class="md:w-[60%] ml-0 flex flex-col gap-4 md:pr-4">
				<Blockquote src={'people/marcus.jpeg'} classes="w-[92%] self-end">
					<span slot="quote">
						I got the starting loan for my company with a presentation made with this software.
						Thank you {$companyName}!
					</span>

					<span slot="person"> Marcus Piaslay </span>

					<span slot="reference"> CEO Of Piattello </span>
				</Blockquote>
				<Blockquote src={'people/avery.jpg'} classes="w-[92%] md:self-end self-center">
					<span slot="quote">
						All of my employees are required to learn how to use {$companyName} as one of the first parts
						of their training.
					</span>

					<span slot="person"> Avery Harris </span>

					<span slot="reference"> CEO of AmeriGo Finance </span>
				</Blockquote>
				<Blockquote src={'people/carter.jpg'} classes="w-[92%] md:self-end self-center">
					<span slot="quote">
						{$companyName} makes our workplace more fun with its graphics, animations, and immersive
						AR and VR technology.
					</span>

					<span slot="person"> Carter Wilson </span>

					<span slot="reference"> CEO of Ungrateful Law </span>
				</Blockquote>
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
						<div class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Satisfaction</div>
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
						<div class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Support</div>
					</div>
					<p class="col-span-3 pl-4 self-center">
						"{$companyName} is an absolute must for any website I develop, it makes everything look better
						and always impresses my clients." - Evelyn Campbell
					</p>
				</blockquote>
				<blockquote
					class="grid grid-cols-4 bg-white shadow-lg md:mr-8 w-[90%] rounded-md self-center"
				>
					<div class="py-6 text-center border-r-2">
						<div class="order-1 text-5xl font-extrabold text-indigo-600 ">190k</div>
						<div class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Users</div>
					</div>
					<p class="col-span-3 pl-4 self-center">
						"This was the first time I've ever implemented AR animations into a project and {$companyName}
						made it so easy. I use it for everything now." - Francis Stewart
					</p>
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
						With our custom API, 24/7 support, and large user-base, Quantum Chart makes it a breeze
						for developers to implement and deploy simple and immersive charts into their working
						environment.
					</p>
					<button
					class="p-2 mx-auto min-w-[144px] border border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
					>
					<a href="/testimonials"> See more testimonials </a>
					</button>
				</div>
			</flex>
		</div>
	</div>
</section>

<IndexDividers type="reputation.bot" />

<style>
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
</style>
