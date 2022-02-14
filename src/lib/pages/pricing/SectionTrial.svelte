<script>
    import { companyName } from '$stores';
    import  PricingDividers from '$pages/pricing/PricingDividers.svelte';
</script>

<section class="bg-lightbg py-24">
    <h1 class="text-6xl text-center">
        Try {$companyName} on Your Projects
    </h1>

    <p class="text-center pt-4">
        Start a 7-day free trial and enjoy all the premium features {$companyName} offers! (No credit card
        needed.)
    </p>

    <flex class="flex justify-center pt-2">
        <form class="space-x-6">
            <div class="inline-flex rounded-md shadow mx-auto pt-4 mt-4">
                <button
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    Start Trial
                </button>
            </div>
            <div class="inline-flex rounded-md shadow mx-auto pt-4 mt-4">
                <a
                    href="/contact-us"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Contact Us
                </a>
            </div>
        </form>
    </flex>
</section>

<PricingDividers type="trial.bot" />