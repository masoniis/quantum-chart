<script>
	export let type;
</script>

{#if type === 'values.top'}
	<div class="topsection-wave bg-gray-200 fill-white z-[1]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{:else if type === 'mission.top'}
	<div class="topsection-wave bg-gray-100 fill-gray-200 z-[-1]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{:else if type === 'story.top'}
	<div class="topsection-wave bg-gray-200 fill-gray-100 z-[1]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{:else if type === 'story.bot'}
	<div class="bottomsection-wave bg-white fill-gray-200 z-[1]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{:else}
	You forgot to put a type
{/if}

<style>
	.topsection-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.topsection-wave svg {
		position: relative;
		display: block;
		width: calc(122% + 1.3px);
		height: 103px;
	}

	.bottomsection-wave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.bottomsection-wave svg {
		position: relative;
		display: block;
		width: calc(122% + 1.3px);
		height: 80px;
	}
	.join-team-bottomwave {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.join-team-bottomwave svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 133px;
	}

	.join-team-topwave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.join-team-topwave svg {
		position: relative;
		display: block;
		width: calc(161% + 1.3px);
		height: 76px;
	}
</style>
