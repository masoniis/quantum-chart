<script>
	import { onMount } from 'svelte';

	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;

	export let steps = 100;
	export let threshold = undefined;
	export let once = true;

	let element;
	let percent;
	let observer;
	let unobserve = () => {};
	let intersectionObserverSupport = false;
	let visible = false;

	$: visible = !intersectionObserverSupport || percent >= threshold;
	$: if (intersectionObserverSupport && visible && once) unobserve();

	function intersectPercent(entries) {
		entries.forEach((entry) => {
			percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
		});
	}

	//Allow the component to pass in a step parameter, so the user can set a percent threshold.
	function stepsToThreshold(steps) {
		//Remaps the array of steps to take each value and devide by steps
		return [...Array(steps).keys()].map((n) => n / steps);
	}


	//When the object is mounted to the DOm, run this.
	onMount(() => {
		//If the browser supports JS "intersectionObserver," set to true
		intersectionObserverSupport =
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype;

		const options = {
			rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
			threshold: stepsToThreshold(steps)
		};

		/*
		If ObserverSupport is true, then create a new IntersectionObserver object with intersectPercent passed in. 
		Target the element and set the unobserve function to the element.
		*/
		if (intersectionObserverSupport) {
			//The callback, intersectPercent, runs every time a threshold is met. That means 100 times in this case.
			observer = new IntersectionObserver(intersectPercent, options);
			observer.observe(element);
			unobserve = () => observer.unobserve(element);
		}

		//When the component is destroyed, unobserve the element.
		return unobserve;
	});
</script>

<div bind:this={element}>
	<slot {visible} {percent} {unobserve} {intersectionObserverSupport} />
</div>
