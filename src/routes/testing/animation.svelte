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

			<div class=".topsection-divider bg-mainbg fill-topsection">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						class="shape-fill"
					/>
				</svg>
			</div>
		</main>
	</div>
</main>
