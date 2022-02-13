<script>
	import { companyName } from '$stores';
	import AboutDividers from './AboutDividers.svelte';
</script>

<AboutDividers type="story.top" />

<section class="bg-gray-200 py-16">
	<flex class="flex flex-col lg:flex-row justify-center mx-auto container gap-6">
		<h2
			class="sm:w-1/2 mx-auto text-center sm:text-left lg:ml-8 text-5xl xs:text-6xl h-fit lg:sticky overflow-visible min-w-fit top-[88px] font-bold tracking-tight text-gray-900 sm:leading-none"
		>
			Our Story
		</h2>
		<p class="sm:w-1/2 mx-auto text-center sm:text-left text-sm xs:text-lg">
			Our two founders, John Howard and Paul Sanders, met as college roommates at the University of
			Colorado, both pursuing a career in software development. They both ended up working on
			similar projects: creating a program that could take data and turn it into a line graph. When
			they realized that they were both working on the same thing, they realized how much potential
			there was for this program. John and Paul combined their projects, dropped out of college, and
			spent the next five years building their project up until it became {$companyName}.
			<br />
			<br />
			{$companyName} is built on a foundation of learning, sharing, and creating. John and Paul's dream--to
			help others innovate, create, and share their ideas with the world--is alive today in our company.
			Everything we do is intended to help people communicate in ways that they weren't able to before.
			We are built on the idea of innovation. Every one of our employees is expected to create something
			new and contribute something that no one else would have thought of. This is our story, and this
			is why we prioritize innovation above everything else: not only for you, but also for the future
			of {$companyName} and the entire chart-creation industry.
		</p>
	</flex>
</section>

<AboutDividers type="story.bot" />
