<script>
	import { fade, fly } from 'svelte/transition';
	import Visibility from '../../components/Visibility.svelte';

	let visible = true;
</script>

<main class="min-h-screen bg-mainbg text-maintext overflow-hidden">
	<div class="container mx-auto">
		<p class="duration-1000 hover:text-white">I AM ANIMATIONS!</p>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

		<label>
			<input type="checkbox" bind:checked={visible} />
			visible
		</label>

		{#if visible}
			<p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
		{/if}

		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<main>
			<h1>Scroll down</h1>

			<Visibility steps={100} let:percent let:unobserve>
				<section>
					<span class="top-left">{percent}%</span>
					<span class="top-right">{percent}%</span>
					<span class="bottom-left">{percent}%</span>
					<span class="bottom-right">{percent}%</span>

					{#if percent > 70}
						<p
							class="container max-w-lg mx-auto"
							in:fly={{ duration: 1000, x: -500 }}
							out:fly={{ duration: 500, y: -500 }}
						>
							I AM FLYING IN LETS GO
						</p>
					{/if}
				</section>
			</Visibility>

            <Visibility steps={100} let:percent let:unobserve>
			{#if percent > 70}
				<div
					class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
					in:fly={{ duration: 1000, x: -500 }}
				>
					<!-- Flex Item 1 -->
					<h1 class="font-bold text-lg px-10 py-10 ">Contact Information</h1>

					<!-- Flex Item 2 -->
					<div class="px-10 pb-10">
						<div class="flex flex-row flex-wrap pb-5">
							<svg
								class="self-center"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								fill-rule="evenodd"
								clip-rule="evenodd"
								><path
									d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
								/></svg
							>
							<div class="pl-5 overflow-hidden">
								<p>12345 Sesame Street Lane</p>
								<p>Parker, CO 80138</p>
							</div>
						</div>
						<div class="flex flex-row py-5">
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								fill-rule="evenodd"
								clip-rule="evenodd"
								><path
									d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
								/></svg
							>
							<p class="pl-5">+1 (123) 456-7890</p>
						</div>
						<div class="flex flex-row pt-5">
							<svg
								class="mr-5"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								fill-rule="evenodd"
								clip-rule="evenodd"
								><path
									d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
								/></svg
							>
							<a
								class="text-mainlink hover:text-mainlinkhover link link-underline link-underline-black"
								href="mail@landscape.com">mail@landscape.com</a
							>
						</div>
					</div>
				</div>
			{/if}
            </Visibility>
		</main>
	</div>
</main>
