<script>
	import { companyName } from '$stores';
	import { scrollTo, scrollRef, setGlobalOptions } from 'svelte-scrolling';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Logo from '$icons/Logo.svelte';
	import Blockquote from '$components/Blockquote.svelte';
	import SectionHeader from '$pages/index/SectionHeader.svelte';
	import IndexDividers from '$pages/index/IndexDividers.svelte';
	import SectionIntro from '$pages/index/SectionIntro.svelte';
	import SectionNavigation from '$pages/index/SectionNavigation.svelte';
	import SectionEasy from '$pages/index/SectionEasy.svelte';
	import SectionReputation from '$pages/index/SectionReputation.svelte';
	import SectionLowCost from '$pages/index/SectionLowCost.svelte';

	setGlobalOptions({
		duration: 400,
		offset: -80,
		easing: cubicInOut
	});
</script>

<SectionHeader />

<main class="min-h-screen text-maintext overflow-hidden">
	<SectionIntro />

	<IndexDividers type="intro.bot" />

	<SectionNavigation />

	<SectionEasy />

	<SectionLowCost />


	<!-- RESPONISVE (Section 7) -->
	<section use:scrollRef={'responsive'} class="hidden">
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

	<SectionReputation />

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
	<section use:scrollRef={'risk-free'} class="pt-36 pb-48">
		<div class="container mx-auto flex flex-col md:flex-row gap-8 justify-center">
			<!-- Risk free box -->
			<div class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50">
				<!-- Flex Item 1 -->
				<h1 class="text-xl font-bold px-10 py-10">Getting started is 100% risk-free</h1>

				<!-- Flex item 2 -->
				<ul class="text-left ml-10 mb-10">
					<li>- No credit card info needed</li>
					<li>- No surprise charges or fees</li>
					<li>- 14 days to try all the features</li>
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

			<!-- Satisfaction guaranteed section -->
			<div
				class="flex flex-col max-w-sm px-2 md:pl-8 self-center md:self-end border-t-2 translate-y-8 md:border-0 mt-6 border-black"
				in:fly={{ duration: 1400, x: 700 }}
			>
				<h1 class="text-xl font-bold pb-3 pt-4">Satisfaction Guaranteed</h1>
				<div>
					<div class="text-mainlink text-lg font-medium">Money back</div>
					<p class="pb-4">
						If you decide to purchase a subscription and find it's not what you thought, we offer
						100% of your money back.
					</p>
				</div>

				<div class="py-4 mb-4 border-y-[1px] border-black">
					<div class="text-mainlink text-lg font-medium">Live support</div>
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
		<div class="text-center px-4 grid">
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
	<div class="start-now-bottomwave fill-lightbg mb-24">
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
