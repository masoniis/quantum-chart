<script>
	import { companyName } from '$stores';
	import { fade, fly } from 'svelte/transition';
	import SectionHeader from '$pages/pricing/SectionHeader.svelte'
    import PricingDividers from './PricingDividers.svelte'

	let individual = 4;
	let premium = 10;
	let team = 75;
	let currentPlanAbbreviated = 'month';
	let planButtonClicked = 1;

	function handleClick(plan) {
		if (plan === 'monthly') {
			individual = 4;
			premium = 10;
			team = 75;
			currentPlanAbbreviated = 'month';
			planButtonClicked = 1;
		} else {
			individual = 39;
			premium = 99;
			team = 699;
			currentPlanAbbreviated = 'year';
			planButtonClicked = 2;
		}
	}
</script>

<section class="max-w-7xl mx-auto pb-24 px-2 sm:px-6 lg:px-8">
    <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 text-center">Pricing Plans</h1>
        <p class="mt-5 text-xl text-gray-500 text-center">
            Try any of our plans and experiment with their unique features. Switch at any time for no
            additional fees.
        </p>
        <div
            class="relative self-center mt-6 mb-6 sm:mb-0 mx-auto bg-lightbg rounded-lg p-0.5 flex sm:mt-8"
        >
            <button
                type="button"
                class="relative w-1/2 border-gray-200 transition-all duration-300 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
                class:active={planButtonClicked === 1}
                on:click={() => handleClick('monthly')}>Monthly billing</button
            >
            <button
                type="button"
                class="ml-0.5 relative w-1/2 border border-transparent transition-all duration-300 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8"
                class:active={planButtonClicked === 2}
                on:click={() => handleClick('yearly')}>Yearly billing</button
            >
        </div>
    </div>
    <grid
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 grid-cols-1 sm:grid sm:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3 bg-transparent"
    >
        <div
            in:fade={{ delay: 0, duration: 300 }}
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg"
        >
            <div class="p-6">
                <h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
                <p class="mt-4 text-sm text-gray-500">Your standard chart service</p>
                <p class="mt-8">
                    {#key planButtonClicked}
                        <span
                            in:fade={{ duration: 300, delay: 200 }}
                            out:fade|local={{ duration: 200 }}
                            class="text-4xl font-extrabold text-gray-900">${individual}</span
                        >
                        <span
                            in:fade={{ duration: 300, delay: 200 }}
                            out:fade|local={{ duration: 200 }}
                            class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
                        >
                    {/key}
                </p>
                <button
                    class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >Buy Basic</button
                >
            </div>
            <div class="pt-6 pb-8 px-6">
                <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul class="mt-6 space-y-4">
                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Access to 6 different types of charts</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Export, save, and download finished charts</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Limit of 10 charts per month</span>
                    </li>
                </ul>
            </div>
        </div>
        <div
            in:fade={{ delay: 250, duration: 300 }}
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg"
        >
            <div class="p-6">
                <h2 class="text-lg leading-6 font-medium text-gray-900">Premium</h2>
                <p class="mt-4 text-sm text-gray-500 mb-8">Every chart you need and more</p>
                {#key planButtonClicked}
                    <span
                        in:fade={{ duration: 300, delay: 200 }}
                        out:fade|local={{ duration: 200 }}
                        class="text-4xl font-extrabold text-gray-900">${premium}</span
                    >
                    <span
                        in:fade={{ duration: 300, delay: 200 }}
                        out:fade|local={{ duration: 200 }}
                        class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
                    >
                {/key}
                <button
                    class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >Buy Premium</button
                >
            </div>
            <div class="pt-6 pb-8 px-6">
                <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul class="mt-6 space-y-4">
                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Access to 15 different types of charts</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Export finished charts as .pdf, .jpg, and much more</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Animate charts with a variety of built-in features</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Immerse yourself in your charts with advanced AR and VR technology</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Unlimited charts per month</span>
                    </li>
                </ul>
            </div>
        </div>
        <div
            in:fade={{ delay: 500, duration: 300 }}
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-lightbg"
        >
            <div class="p-6">
                <h2 class="text-lg leading-6 font-medium text-gray-900">Team</h2>
                <p class="mt-4 text-sm text-gray-500">Charts for the whole group</p>
                <p class="mt-8">
                    {#key planButtonClicked}
                        <span
                            in:fade={{ duration: 300, delay: 200 }}
                            out:fade|local={{ duration: 200 }}
                            class="text-4xl font-extrabold text-gray-900">${team}</span
                        >
                        <span
                            in:fade={{ duration: 300, delay: 200 }}
                            out:fade|local={{ duration: 200 }}
                            class="text-base font-medium text-gray-500">/{currentPlanAbbreviated}</span
                        >
                    {/key}
                </p>
                <button
                    class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >Buy Team</button
                >
            </div>
            <div class="pt-6 pb-8 px-6">
                <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul class="mt-6 space-y-4">
                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Register up to 20 different users</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Access to 15 different types of charts</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Export finished charts as .pdf, .jpg, and much more</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Animate charts with a variety of built-in features</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500"
                            >Immerse yourself in your charts with advanced AR and VR technology</span
                        >
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Unlimited charts per month</span>
                    </li>

                    <li class="flex space-x-3">
                        <!-- Heroicon name: solid/check -->
                        <svg
                            class="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm text-gray-500">Share charts by creating QuantumGroups</span>
                    </li>
                </ul>
            </div>
        </div>
    </grid>
</section>

<PricingDividers type="boxes.bot" />