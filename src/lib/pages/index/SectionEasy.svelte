<script>
    import { scrollRef } from 'svelte-scrolling';
    import Logo from '$icons/Logo.svelte';
</script>

<section use:scrollRef={'easy'} class="container mx-auto py-16 pb-32">
    <h1
        class="text-center font-bold pt-6
            text-4xl
            sm:text-5xl
            md:text-6xl"
    >
        This is how it works
    </h1>

    <grid class="grid grid-cols-1 grid-rows-1 md:grid-cols-3 py-12 gap-x-4 gap-y-12">
        <div class="text-center">
            <p class="h-24 w-24 mx-auto -translate-y-10">
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 194.55 299.81"
                    ><defs
                        ><style>
                            .cls-1 {
                                fill: #fdf8ad;
                            }
                            .cls-2 {
                                fill: #808184;
                            }
                        </style></defs
                    ><path
                        class="fill-yellow-200"
                        d="M297.52,118.31c0-49.2-46.06-88.83-101.88-86.54-49.77,2.05-90.18,38-92.56,82.3-1.27,23.83,8.27,45.67,24.64,62a84.57,84.57,0,0,1,25.22,60.15v22l94.61.61V235.11a81.92,81.92,0,0,1,24.8-58.66C288,161.08,297.52,140.69,297.52,118.31Z"
                        transform="translate(-102.97 -31.68)"
                    /><path
                        class="cls-2"
                        d="M61.63,233.57h71.79a10.17,10.17,0,0,1,10.17,10.17v7.59a0,0,0,0,1,0,0H51.46a0,0,0,0,1,0,0v-7.59A10.17,10.17,0,0,1,61.63,233.57Z"
                    /><rect class="cls-2" x="50.5" y="257.93" width="92.48" height="18.15" /><path
                        class="cls-2"
                        d="M50.5,281.66H143a0,0,0,0,1,0,0v8a10.17,10.17,0,0,1-10.17,10.17H60.67A10.17,10.17,0,0,1,50.5,289.64v-8a0,0,0,0,1,0,0Z"
                    /></svg
                >
            </p>
            <h2 class="text-5xl py-4">Imagine</h2>
            <p>how you want your data displayed</p>
        </div>
        <div class="text-center">
            <p class="h-24 w-24 mx-auto">
                <Logo />
            </p>
            <h2 class="text-5xl py-4">Create</h2>
            <p>your design, bringing it to life in the real world</p>
        </div>
        <div class="text-center">
            <p class="h-24 w-24 mx-auto scale-125 translate-y-6">
                <img src="Airplane.png" alt="airplane" />
            </p>
            <h2 class="text-5xl py-4">Deploy</h2>
            <p>the design to any application supported</p>
        </div>
    </grid>
</section>