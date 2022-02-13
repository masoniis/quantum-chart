<script>
    import { companyName } from '$stores'
    import IndexDividers from './IndexDividers.svelte'
</script>

<IndexDividers type="startnow.top" />

<section class="bg-lightbg py-16">
    <div class="text-center px-4 grid">
        <h1
            class="font-bold text-maintext pb-4
                text-4xl
                xs:text-5xl
                md:text-6xl 
                lg:text-7xl"
        >
            Try {$companyName} On Us
        </h1>
        <p
            class="text-gray-500 max-w-3xl mx-auto
                text-md	
                lg:text-lg"
        >
            Start a no-commitment 14 day free trial. No credit card required! Once the trial is up, you
            get to decide whether {$companyName} is right for you.
        </p>
        <div class="inline-flex rounded-md shadow mx-auto pt-4 mt-4">
            <a
                href="/pricing"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
                Start your free trial
            </a>
        </div>
    </div>
</section>

<IndexDividers type="startnow.bot" />