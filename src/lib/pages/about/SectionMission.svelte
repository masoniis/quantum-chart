<script>
	import { companyName } from '$stores';
	import AboutDividers from '$pages/about/AboutDividers.svelte';
</script>

<AboutDividers type="mission.top" />

<section class="bg-gray-100 py-16">
	<flex class="flex flex-col lg:flex-row mx-auto container gap-6">
		<h2
			class="sm:w-1/2 text-center mx-auto sm:text-left lg:ml-8 text-5xl xs:text-6xl h-fit lg:sticky overflow-hidden min-w-fit top-[88px] font-bold tracking-tight text-gray-900 sm:leading-none"
		>
			Our Mission
		</h2>
		<p class="sm:w-1/2 mx-auto text-sm xs:text-lg text-center sm:text-left">
			{$companyName} started with the question, what if? What if we changed the way charting software
			worked, making it easier and more accessible for everyone? What if we used unique AR and VR software
			to make chart designing more interactive and enjoyable? What if we could make it simple for everyone
			of all ages to make any chart they want?
			<br /> <br />
			At {$companyName}, we set out to make all those dreams come true in a single software. We
			offer a wide variety of charts for people to make with a simple user interface, optimize our
			programs to make your experience as quick and smooth as possible, and crossed the borders of
			what was thought to be possible with charting software by implementing AR and VR technology
			directly into our program. We offer the best charts at the best prices, making the newest
			cutting-edge technology available to everyone.
		</p>
	</flex>
</section>
