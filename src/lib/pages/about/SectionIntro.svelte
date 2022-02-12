<script>
	import { companyName } from '$stores';
	import Logo from '$icons/Logo.svelte';
</script>

<section class="min-w-screen pt-40 mb-24">
	<div class="flex flex-col md:flex-row container max-w-6xl px-12 mx-auto xl:px-10 space-x-6">
		<h2
			class="text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-bold tracking-tight text-gray-900 sm:leading-none"
		>
			Learn what {$companyName} is really about
		</h2>
		<div class="mx-auto self-center pt-4 md:hidden h-[128px] w-[128px]">
			<Logo />
		</div>
		<p class="hidden md:block md:h-[200px] md:w-[252px]">
			<Logo />
		</p>
	</div>

	<p class="text-sm xs:text-lg max-w-5xl mx-auto text-left font-normal pt-6 px-16">
		At {$companyName}, our top priority is to provide the best possible service to every single
		person who uses our products. We are constantly working to enhance, expand, and elevate our
		products to standards beyond those of any other company. We make charts modern, immersive, and
		unique to enhance your experience and revolutionize the chart-creation industry.
	</p>
</section>
