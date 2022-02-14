<script>
    import { companyName } from '$stores';
</script>


	<section class="bg-gray-200 py-24">
		<h1 class="font-extrabold text-5xl text-center pb-12">Frequently Asked Questions</h1>

		<!-- Question Grid -->
		<grid class="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-5xl gap-10 px-8">
			<div class="space-y-2">
				<strong class="text-xl font-bold"
					>Why should I spend money on this instead of using a free chart software?</strong
				>
				<p class="text-sm font-normal text-maintext">
					{$companyName} offers a variety of products not available with free chart software. Our advanced
					AR and VR software allows you to visualize and edit charts in 3D and our animation features
					allow you to quickly and easily make charts that will make anyone say "wow!".
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">How do I set up {$companyName} on my computer?</strong>
				<p class="text-sm font-normal text-maintext">
					It's simple! Once you've purchased your subscription, you will be taken to a download page
					and emailed a unique key. Just download our app, enter the key, and you're good to go! The
					software provides an easy-to-follow tutorial that you can go through at any time.
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">How should I choose what plan is best for me?</strong>
				<p class="text-sm font-normal text-maintext">
					Our Basic plan is best if you only need to make charts occasionally and are fine with
					simple options. If you want to dive deeper into the possibilities offered by Quantum
					Charts and have access to all of our unique features, try Premium! Our Team plan works
					best for larger organizations and groups and offers a discount if you want to register up
					to 20 users.
				</p>
			</div>

			<div class="space-y-2">
				<strong class="text-xl font-bold">What file formats can I export my charts as?</strong>
				<p class="text-sm font-normal text-maintext">
					{$companyName} supports .pdf, .jpg, .png, .md, .gif, .jpeg, .ai, and .tif chart exports. If
					your favorite file type isn't on here, feel free to
					<a
						href="/contact-us"
						class="text-mainlink hover:text-mainlinkhover link link-underline link-underline-black"
						>contact us</a
					> with new suggestions!
				</p>
			</div>
		</grid>
	</section>
