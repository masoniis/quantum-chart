<script>
    import { fly  } from 'svelte/transition';
	import { companyName } from '$stores';

	import Visibility from '$scripts/Visibility.svelte';

    let contactHeight;

</script>

<Visibility threshold="30" let:visible>
    <div
        bind:clientHeight={contactHeight}
        class="relative mx-0 px-2 min-w-10/12 py-14 md:py-24 bg-gray-100"
        style="min-height: {contactHeight}px"
    >
        {#if visible}
            <div class="container mx-auto flex flex-col md:flex-row justify-center">
                <!-- Contact Info ICONS TAKEN FROM: https://iconmonstr.com PAY ATTENTION TO LICENSE-->

                <div
                    class="flex flex-col self-center md:self-start max-w-md shadow-lg bg-stone-50"
                    in:fly={{ duration: 1400, x: -700 }}
                >
                    <!-- Flex Item 1 -->
                    <h1 class="font-bold text-lg px-10 py-10 ">Contact Information</h1>

                    <!-- Flex Item 2 -->
                    <div class="px-10 pb-10">
                        <div class="flex flex-row flex-wrap pb-5">
                            <svg
                                class="self-center"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                ><path
                                    d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
                                /></svg
                            >
                            <div class="pl-5 overflow-hidden">
                                <p>12345 Sesame Street Lane</p>
                                <p>Parker, CO 80138</p>
                            </div>
                        </div>
                        <div class="flex flex-row py-5">
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                ><path
                                    d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"
                                /></svg
                            >
                            <p class="pl-5">+1 (123) 456-7890</p>
                        </div>
                        <div class="flex flex-row pt-5">
                            <svg
                                class="mr-5"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                ><path
                                    d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
                                /></svg
                            >
                            <a
                                class="text-mainlink hover:text-mainlinkhover link link-underline link-underline-black"
                                href="support@quantumchart.com">support@quantumchart.com</a
                            >
                        </div>
                    </div>
                </div>

                <!-- How Can We Help? -->
                <div
                    class="flex flex-col max-w-sm px-2 md:pl-8 self-center md:self-end border-t-2 md:border-0 mt-6 border-black"
                    in:fly={{ duration: 1400, x: 700 }}
                >
                    <h1 class="text-2xl font-bold pb-3 pt-4">How Can We Help?</h1>
                    <p class="pb-2">
                        Please select a topic below related to your inquiry. If you don’t find what you need,
                        fill out our contact form.
                    </p>

                    <div>
                        <a
                            href="/"
                            class="text-mainlink hover:text-mainlinkhover text-lg font-medium link link-underline link-underline-black"
                            >Book a Demo</a
                        >
                        <p class="pb-4">Request a demo from one of our charting masters.</p>
                    </div>

                    <div class="py-4 mb-4 border-y-[1px] border-black">
                        <a
                            href="/pricing"
                            class=" text-mainlink hover:text-mainlinkhover text-lg font-medium link link-underline link-underline-black"
                            >Start Your Free Trial</a
                        >
                        <p>Start a 14-day free trial of {$companyName}. No credit card required!</p>
                    </div>
                    <div>
                        <a
                            href="/about"
                            class="text-mainlink hover:text-mainlinkhover text-lg font-medium pt-4 link link-underline link-underline-black"
                            >Join the Team</a
                        >
                        <p>Join our force and help us make {$companyName} better!</p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</Visibility>