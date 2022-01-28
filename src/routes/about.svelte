<script>
	import Logo from '../components/Logo.svelte';
	import { companyName } from '../stores';
</script>

<title>{$companyName}  - About</title>

<main class="min-h-screen text-maintext overflow-hidden">
	<!-- Top Section -->
	<section class="min-w-screen min-h-screen pt-40">
		<div class="flex flex-row container max-w-6xl px-12 mx-auto xl:px-10 space-x-6">
			<h2 class="text-6xl text-left font-bold tracking-tight text-gray-900 sm:leading-none">
				Learn what Beyondgreen is really about

				<p class="text-xl text-left font-normal pt-6">
					From stuff to stuff to stuffrom stuff to stuff to stuffrom stuff to stuff to stuffrom
					stuff to stuff to stuffrom stuff to stuff to stuff
				</p>
			</h2>
			<p class="h-[512px] w-[512px]">
				<Logo />
			</p>
		</div>
	</section>

	<!-- Our Mission -->
	<section class="min-w-screen min-h-screen pt-40">
		<div class="flex flex-row container max-w-6xl px-12 mx-auto xl:px-10 space-x-6">
			<h2 class="text-6xl text-left font-bold tracking-tight text-gray-900 sm:leading-none">
				Our mission
			</h2>
		</div>
	</section>

	<!-- Our Story -->
	<section class="min-w-screen min-h-screen pt-40">
		<div class="flex flex-row container max-w-6xl px-12 mx-auto xl:px-10 space-x-6">
			<h2 class="text-6xl text-left font-bold tracking-tight text-gray-900 sm:leading-none">
				Our story
			</h2>
		</div>
	</section>
</main>
