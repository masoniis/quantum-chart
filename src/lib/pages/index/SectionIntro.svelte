<script>
	import { slide, fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Modal from '$components/Modal.svelte';

	let intro;

	onMount(() => {
		intro = true;
	});

	// Squiggle Animaition Variables
	let width;
	let squiggle;

	let email = '';

	//Create a component to bind Modal
	let modalComponent;

	function handleReqDemo(e) {
		modalComponent.toggleModal();
		modalComponent.storeY();
	}

	$: {
		if (width < 640) {
			squiggle = true;
		} else {
			squiggle = false;
		}

		console.log(width)
	}
</script>

<svelte:window bind:innerWidth={width} />

<Modal bind:this={modalComponent}>
	Thank you for requesting a demo. Watch your email for an invitation and information!
</Modal>

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
						in:fade={{ duration: 500, delay: 500 }}
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

<style>
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
