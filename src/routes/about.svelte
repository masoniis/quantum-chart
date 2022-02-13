<script>
	import { companyName } from '$stores';
	import Logo from '$icons/Logo.svelte';
	import Modal from '$components/Modal.svelte';
	import SectionHeader from '$pages/about/SectionHeader.svelte';
	import SectionIntro from '$pages/about/SectionIntro.svelte';
	import AboutDividers from '$pages/about/AboutDividers.svelte';
	import SectionValues from '$pages/about/SectionValues.svelte';
	import SectionMission from '$pages/about/SectionMission.svelte';
	import SectionStory from '$pages/about/SectionStory.svelte';

	let email;

	//From the Modal component
	let showModal = false;
	let modalComponent;

	function handleReqInfo(e) {
		modalComponent.toggleModal();
		modalComponent.storeY();
		email = '';
	}
</script>

<SectionHeader />

<Modal bind:this={modalComponent} bind:showModal>
	Thanks for your information request. We will reply to the email you submitted shortly with
	information on how to apply or contribute to {$companyName}.
</Modal>

<main class="min-h-screen text-maintext">
	<SectionIntro />

	<SectionValues />

	<SectionMission />

	<SectionStory />

	<!-- Founder Bios -->
	<section>
		<h1
			style="margin-top: -0.45rem"
			class="text-center mx-auto mb-4 text-5xl xs:text-6xl h-fit overflow-visible min-w-fit font-bold tracking-tight text-gray-900 sm:leading-none"
		>
			Our Founders
		</h1>
		<div class="flex flex-col lg:flex-row lg:gap-6">
			<div class="flex-col text-center justify-center mx-auto xl:px-10 w-50">
				<img src="John.png" alt="John" width="500" height="1000" class="mx-auto" />
				<h3 class="text-2xl my-2 mb-1 text-center font-bold text-gray-700">John</h3>
				<p class="text-center mb-4 sm:mb-0">
					"I never saw myself where I am today--a young entrepreneur, partnering with a college
					roommate to spend five years creating a charting app. But I don't regret a minute of it. {$companyName}
					feels like a part of me now and I love seeing people's positive reactions to it."
				</p>
			</div>
			<div class="flex-col justify-center mx-auto xl:px-10 w-50">
				<img src="Paul.png" alt="Paul" width="500" height="1000" class="mx-auto" />
				<h3 class="text-2xl mt-2 mb-1 text-center font-bold text-gray-700">Paul</h3>
				<p class="text-center">
					"I've dreamt of creating my own app since middle school. Now, with {$companyName}, that
					dream has become a reality for me. I hope that {$companyName} can make life easier for people
					who want to create presentations or anything else that needs charts."
				</p>
			</div>
		</div>
	</section>

	<!-- TOP DIVIDER (for start now section) -->
	<div class="join-team-topwave fill-gray-200 mt-24">
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

	<!-- Join the team section -->
	<section class="bg-gray-200 py-16">
		<div class="text-center px-4 grid overflow-hidden">
			<h1
				class="font-bold text-maintext pb-4
					text-4xl
					xs:text-5xl
					md:text-6xl 
					lg:text-7xl"
			>
				Join the {$companyName} team
			</h1>
			<p
				class="text-gray-500 max-w-3xl mx-auto
					text-md	
					lg:text-lg"
			>
				Email us if you are interested and we will be sure to respond with the chance at an
				interview! We would love to work with you.
			</p>
			<form
				on:submit|preventDefault={handleReqInfo}
				class="col-span-1 mx-auto flex flex-col gap-2 self-center items-center sm:space-x-4 py-6 z-[2]
					xs:flex-row
					md:max-w-md"
			>
				<input
					bind:value={email}
					required
					type="email"
					id="demo"
					placeholder="Enter Email*"
					class="shadow-lg my-2 text-center focus:ring-emerald-400 focus:border-emerald-500 block border-gray-300 rounded-full scale-75
						2xs:text-sm 2xs:text-left 2xs:my-0 2xs:pl-[1.3rem] 2xs:scale-100 2xs:w-3/4"
				/>
				<button
					type="submit"
					class="py-2 border min-w-[144px] border-transparent shadow-lg text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400
						2xs:w-1/4 2xs:scale-100"
				>
					Request info
				</button>
			</form>
		</div>
	</section>

	<!-- BOTTOM DIVIDER (for start now section) -->
	<div class="join-team-bottomwave fill-gray-200 mb-24">
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
	.join-team-bottomwave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.join-team-bottomwave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 133px;
	}

	.join-team-topwave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.join-team-topwave svg {
		position: relative;
		display: block;
		width: calc(161% + 1.3px);
		height: 76px;
	}
</style>
