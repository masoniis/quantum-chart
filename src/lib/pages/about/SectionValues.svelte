<script>
    import {companyName} from '$stores';
    import AboutDividers from '$pages/about/AboutDividers.svelte';
</script>

<AboutDividers type="values.top" />

<section class="bg-gray-200 py-16">
    <flex class="flex flex-col lg:flex-row justify-center mx-auto container gap-6">
        <h2
            class="sm:w-1/2 mx-auto text-center sm:text-left lg:ml-8 text-5xl xs:text-6xl h-fit lg:sticky overflow-visible min-w-fit top-[88px] font-bold tracking-tight text-gray-900 sm:leading-none"
        >
            Our Values
        </h2>
        <flex class="sm:w-1/2 flex-flex-col mx-auto text-lg">
            <flex class="flex flex-row py-3">
                <div class="hidden">1 image</div>
                <div class="flex flex-col">
                    <h2 class="font-bold">
                        We
                        <span class="text-pink-400">care</span>
                    </h2>
                    <p class="text-lg text-gray-500 font-normal">
                        about making {$companyName} perfect for you.
                    </p>
                </div>
            </flex>
            <flex class="flex flex-row py-3">
                <div>
                    <h2 class="font-bold">
                        We
                        <span class="text-yellow-400">design</span>
                    </h2>
                    <p class="text-lg text-gray-500">
                        an easy-to-use app with hundreds of unique features.
                    </p>
                </div>
            </flex>
            <flex class="flex flex-row py-3">
                <div>
                    <h2 class="font-bold">We <span class="text-blue-600">learn</span></h2>
                    <p class="text-gray-500 text-lg">to constantly make our software better.</p>
                </div></flex
            >
            <flex class="flex flex-row py-3">
                <div>
                    <h2 class="font-bold">We <span class="text-red-500">create</span></h2>
                    <p class="text-gray-500 text-lg">
                        charts for anywhere and everywhere you might need them.
                    </p>
                </div></flex
            >
            <flex class="flex flex-row py-3">
                <div>
                    <h2 class="font-bold">We <span class="text-purple-600">respond</span></h2>
                    <p class="text-gray-500 text-lg">and your feedback helps us improve our software.</p>
                </div>
            </flex>
            <flex class="flex flex-row py-3">
                <div>
                    <h2 class="font-bold">We <span class="text-orange-400">inspire</span></h2>
                    <p class="text-gray-500 text-lg">a new generation of chart-creation software.</p>
                </div>
            </flex>
        </flex>
    </flex>
</section>
