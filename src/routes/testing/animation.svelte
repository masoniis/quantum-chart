<script>
	import { fade, fly, draw } from 'svelte/transition';
	import Visibility from '../../components/Visibility.svelte';
</script>

<main class="min-h-screen text-maintext overflow-hidden bg-gray-500">
	<p class="pt-72 text-center">Hey</p>

	<svg
		class="w-screen h-[25rem]"
		xmlns="http://www.w3.org/2000/svg"
		style="vector-effect: non-scaling-stroke;"
	>
		<path
			class="path scale-125"
			id="swirl"
			stroke-width="5"
			d="m-54.92784,-29.99948c-3.60888,-1.24717 50.52427,465.19319 422.23852,304.30868c371.71426,-160.88451 1107.92502,-265.64651 1107.92502,-265.64651c0,0 66.76421,-6.23583 66.76421,-6.23583"
			stroke="#000"
			fill="transparent"
		/>
	</svg>
</main>

<style>

</style>
