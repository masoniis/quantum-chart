<script>
	import Logo from '../components/Logo.svelte';
	import { companyName } from '../stores';
	let johnPhoto = 'static/John.jpg';
	let paulPhoto = 'static/Paul.png';
</script>

<title>{$companyName} - About</title>

<main class="min-h-screen text-maintext">
	<!-- Top Section -->
	<section class="min-w-screen min-h-screen pt-40">
		<div class="flex flex-row container max-w-6xl px-12 mx-auto xl:px-10 space-x-6">
			<h2 class="text-6xl text-left font-bold tracking-tight text-gray-900 sm:leading-none">
				Learn what {$companyName} is really about

				<p class="text-xl text-left font-normal pt-6">
					At {$companyName}, our top priority is to provide the best possible service to every
					single person who uses our products. We are constantly working to enhance, expand, and
					elevate our products to standards beyond those of any other company. We make charts
					modern, immersive, and unique to enhance your experience and revolutionize the
					chart-creation industry.
				</p>
			</h2>
			<p class="h-[512px] w-[512px]">
				<Logo />
			</p>
		</div>
		<br/>
		<br/>
	</section>


	<!-- Our Mission -->
	<section class="bg-gray-200 py-16 my-8">
		<flex class="flex flex-col lg:flex-row justify-center mx-auto container gap-6">
			<h2
				class="mx-auto text-center text-6xl h-fit lg:sticky overflow-hidden min-w-fit top-[88px] font-bold tracking-tight text-gray-900 sm:leading-none"
			>
				Our Mission
			</h2>
			<p class="lg:w-1/2 text-lg">
				{$companyName} started with the question, what if? What if we changed the way charting software
				worked, making it easier and more accessible for everyone? What if we used unique AR and VR software
				to make chart designing more interactive and enjoyable? What if we could make it simple for everyone
				of all ages to make any chart they want?
				<br /> <br />
				At {$companyName}, we set out to make all those dreams come true in a single software. We offer a wide
				variety of charts for people to make with a simple user interface, optimize our programs to make your
				experience as quick and smooth as possible, and crossed the borders of what was thought to be
				possible with charting software by implementing AR and VR technology directly into our program. We
				offer the best charts at the best prices, making the newest cutting-edge technology available to
				everyone.
			</p>
		</flex>
	</section>

	<!-- Our Story -->
	<section class="bg-gray-200 py-16 my-8">
		<flex class="flex flex-col lg:flex-row justify-center mx-auto container gap-6">
			<h2
				class="mx-auto text-center text-6xl h-fit lg:sticky overflow-hidden min-w-fit top-[88px] font-bold tracking-tight text-gray-900 sm:leading-none"
			>
				Our Story
			</h2>
			<p class="lg:w-1/2 text-lg">
				Our two founders, John and Paul, met as college roommates, both pursuing a career in
				software development. They both ended up working on similar projects: creating a program
				that could take data and turn it into a line graph. When they realized that they were both
				working on the same thing, they realized how much potential there was for this program. John
				and Paul combined their projects, dropped out of college, and spent the next five years
				building their project up until it became {$companyName}.
			</p>
		</flex>
	</section>

	<!-- Founder Bios -->
	<section>
		<div class="flex flex-col lg:flex-row gap-6">
			<div class="flex-col text-center justify-center mx-auto xl:px-10 w-50">
				<img src={johnPhoto} alt="John" width="500" height="1000" class='text-center'/>
				<h3 class="text-2xl my-2 mb-1 text-center font-bold text-gray-700">John</h3>
				<p>
					"I never saw myself where I am today--a young entrepreneur, partnering with a college
					roommate to spend five years creating a charting app. But I don't regret a minute of it. {$companyName}
					feels like a part of me now and I love seeing people's positive opinions of it."
				</p>
			</div>
			<div class="flex-col justify-center mx-auto xl:px-10 w-50">
				<img src={paulPhoto} alt="Paul" width="500" height="1000" class='justify-center'/>
				<h3 class="text-2xl mt-2 mb-1 text-center font-bold text-gray-700">Paul</h3>
				<p>
					"I've dreamt of creating my own app since middle school. Now, with {$companyName}, that
					dream has become a reality for me. I hope that {$companyName} can make life easier for people
					who want to create presentations or anything else that needs charts."
				</p>
			</div>
		</div>
	</section>
</main>