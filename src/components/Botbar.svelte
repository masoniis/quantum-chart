<script>
	import { tweened } from 'svelte/motion' 

	// Tweened Hover Animation
	const value = tweened(0)
</script>

<footer class="bg-light-bg text-light-text transition-colors duration-500 p-6">
    <div class="container flex justify-between items-center border-t-2 border-stone-400 px-5 mx-auto transition-all ease-linear duration-1000">

        <!--Flex Item 1-->
        <div class="flex justify-items-start text-sm pt-3">

            <!--Mini-flex Item 1-->
            <p class="pr-4 py-1 mt-0 mr-4 border-r border-stone-400">Copyright @ 2022 Landscape Inc.</p>

            <!--Mini-flex Item 2, underline from: https://tailwindcomponents.com/component/link-underline-animation -->
                <a href="https://google.com/search?q=Trademark+Policy" class="py-1 mt-0 hover:text-light-hover link link-underline link-underline-black">
                    <span class="">
                        Trademark Policy
                    </span>
                </a>
        </div>

        <!-- Flex Item 2-->
        <span class="inline-flex mt-0 pt-3">

            <!--Start of new mini-flex: all the icons-->
                <a href="https://facebook.com/" class="text-light-text hover:text-light-hover link">
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>

                <a href="https://twitter.com class=" class="ml-3 text-light-text hover:text-light-hover">
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
            
                <a href="https://instagram.com" class="ml-3 text-light-text hover:text-light-hover link">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>

                <a href="https://linkedin.com" class="ml-3 text-light-text hover:text-light-hover link">
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>

        </span>
    </div>
</footer>