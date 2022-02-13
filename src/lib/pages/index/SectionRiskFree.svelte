<script>
    import { fly } from 'svelte/transition';
	import { scrollRef } from 'svelte-scrolling';
</script>

<section use:scrollRef={'risk-free'} class="pt-36 pb-48">
    <div class="container mx-auto flex flex-col md:flex-row gap-8 justify-center">
        <!-- Risk free box -->
        <div class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50">
            <!-- Flex Item 1 -->
            <h1 class="text-xl font-bold px-10 py-10">Getting started is 100% risk-free</h1>

            <!-- Flex item 2 -->
            <ul class="text-left ml-10 mb-10">
                <li>- No credit card info needed</li>
                <li>- No surprise charges or fees</li>
                <li>- 14 days to try all the features</li>
            </ul>

            <!-- Flex item 3 -->
            <div class="inline-flex rounded-md shadow mx-auto mb-10">
                <a
                    href="/pricing"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Start your free trial
                </a>
            </div>
        </div>

        <!-- Satisfaction guaranteed section -->
        <div
            class="flex flex-col max-w-sm px-2 md:pl-8 self-center md:self-end border-t-2 translate-y-8 md:border-0 mt-6 border-black"
            in:fly={{ duration: 1400, x: 700 }}
        >
            <h1 class="text-xl font-bold pb-3 pt-4">Satisfaction Guaranteed</h1>
            <div>
                <div class="text-mainlink text-lg font-medium">Money back</div>
                <p class="pb-4">
                    If you decide to purchase a subscription and find it's not what you thought, we offer
                    100% of your money back.
                </p>
            </div>

            <div class="py-4 mb-4 border-y-[1px] border-black">
                <div class="text-mainlink text-lg font-medium">Live support</div>
                <p>Our live support can help you fix any issues you are having on the spot.</p>
            </div>
        </div>
    </div>
</section>