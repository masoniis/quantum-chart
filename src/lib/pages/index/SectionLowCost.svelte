<script>
	import { fly } from 'svelte/transition';
	import { scrollTo, scrollRef, setGlobalOptions } from 'svelte-scrolling';
</script>

<section use:scrollRef={'low-cost'} class="container mx-auto hidden">
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
