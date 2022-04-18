<script>
	import { companyName } from '$stores';
	import { scrollTo } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

    const words = [
		'simple',
		'amazing',
		'efficient',
		'awesome',
		'sleek',
		'seamless',
		'quick',
		'beautiful',
		'immersive'
	];

	const colors = [
		'#61C9A8', //Ocean Green 			(green)
		'#BBC8CA', //Silver Sand 			(blue)
		'#B592A0', //Lilac Luster 			(lilac)
		'#677DB7', //Glaucous 				(blue)
		'#FB3640', //Red Salsa 				(red)
		'#ED9B40', //Carrot Orange 			(orange)
		'#EB6534', //Flame					(orange)
		'#DBAFC1', //Cameo Pink				(pink)
		'#92B4A7' //Cambridge Blue			(cyan-like)
	];

	const randomColor = () => {
		return Math.round(Math.random() * (colors.length - 1));
	};

	let index = 0;
	let randColor = randomColor();

	onMount(() => {
		const interval = setInterval(() => {
			index = index + 1;
			randColor = randomColor();
			if (index > words.length - 1) {
				index = 0;
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<section class="container mx-auto my-24">
    <flex
        class="flex justify-center md:justify-start md:items-start perspective xl:justify-center max-h-64 md:max-h-fit"
    >
        <div class="max-w-xl z-[3] feature-grid-text pb-48">
            <h2
                class="font-extrabold tracking-tight py-8 
                    text-3xl
                    xs:text-4xl text-center
                    sm:text-5xl sm:px-8
                    md:text-6xl md:text-left md:min-w-[38rem] md:px-0"
                style="max-width: 38rem;"
            >
                With {$companyName}, data has never been so
                {#key index}
                    <p
                        in:fade={{ duration: 400 }}
                        class="md:inline before:content-['['] before:text-maintext after:content-['].'] after:text-maintext"
                        style="color: {colors[randColor]}"
                    >
                        {words[index]}
                    </p>
                {/key}
            </h2>
            <p
                class="text-md mx-auto text-center max-w-sm 
                    md:mx-0 md:text-left md:text-xl md:max-w-3xl"
            >
                Unrivaled service, revolutionary technology, and low prices, {$companyName} is a service like
                no other.
            </p>
        </div>

        <!-- 3d Panel -->
        <grid
            class="hidden md:grid grid-cols-4 grid-rows-5 origin-center feature-grid w-[40rem] mr-12 mt-20 space-x-4 space-y-4"
        >
            <button
                use:scrollTo={'low-cost'}
                class="row-span-2 bg-gray-200 border mt-4 ml-4 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.05]"
            >
                <!-- Low Cost Image -->
                <img
                    class="rounded-2xl h-[120px]"
                    style="background-color: #666766"
                    src="panel/low-cost.jpg"
                    alt="Low Cost"
                />
            </button>
            <button
                use:scrollTo={'easy'}
                class="row-span-3 col-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
            >
                <!-- Easy to Use Image -->
                <img
                    class="rounded-2xl h-48"
                    style="background-color: #666766"
                    src="panel/easy-to-use.jpg"
                    alt="Easy to Use"
                />
            </button>
            <button
                use:scrollTo={'risk-free'}
                class="row-span-2 bg-gray-200 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
            >
                <!-- Satisfaction Guaranteed Image -->
                <img
                    class="rounded-2xl h-[122px]"
                    style="background-color: #666766"
                    src="panel/satisfaction-guarenteed.jpg"
                    alt="Satisfaction Guaranteed"
                />
            </button>
            <button
                use:scrollTo={'reputable'}
                class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
            >
                <!-- Reputable Image -->
                <img
                    class="rounded-2xl h-[190px]"
                    style="background-color: #666766"
                    src="panel/reputable.jpg"
                    alt="Reputable"
                />
            </button>
            <button
                use:scrollTo={'responsive'}
                class="row-span-3 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
            >
                <!-- Responsive Image -->
                <img
                    class="rounded-2xl h-[191px]"
                    style="background-color: #666766"
                    src="panel/responsive.jpg"
                    alt="Responsive"
                />
            </button>
            <button
                use:scrollTo={'risk-free'}
                class="col-span-2 row-span-2 bg-gray-300 border rounded-2xl hover:shadow-xl transition-all flex-col hover:scale-[1.05]"
            >
                <!-- Risk Free Image -->
                <img
                    class="rounded-2xl h-[122px]"
                    style="background-color: #666766"
                    src="panel/risk-free.jpg"
                    alt="Risk Free"
                /></button
            >
        </grid>
    </flex>
</section>

<style>
    	.feature-grid-text {
		background: linear-gradient(90deg, rgb(255, 255, 255) 83%, rgba(255, 255, 255, 0));
	}

	.feature-grid {
		position: relative;
		min-height: 15rem;
		min-width: 40rem;
		z-index: 1;

		transform-style: preserve-3d;
		transform-origin: left;

		transform: perspective(100rem) rotateY(-50deg) rotateX(0deg) rotateZ(0deg) translateZ(0)
			translateX(70px);

		left: min(calc(1200px - 100vw) * -1, 0px);
	}
</style>