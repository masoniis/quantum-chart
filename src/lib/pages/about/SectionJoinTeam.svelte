<script>
	import { companyName } from '$stores';
	import Modal from '$components/Modal.svelte';
	import AboutDividers from './AboutDividers.svelte';

	export let email;

	//From the Modal component
	let modalComponent;

	function handleReqInfo() {
		modalComponent.toggleModal();
		modalComponent.storeY();
		email = '';
	}
</script>

<Modal bind:this={modalComponent}>
	Thanks for your information request. We will reply to the email you submitted shortly with
	information on how to apply or contribute to {$companyName}.
</Modal>

<AboutDividers type="joinTeam.top" />

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
			Email us if you are interested and we will be sure to respond with the chance at an interview!
			We would love to work with you.
		</p>
		<form
			on:submit|preventDefault
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

<AboutDividers type="joinTeam.bot" />
