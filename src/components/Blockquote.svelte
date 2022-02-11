<script>
	export let src;
</script>

<blockquote
	class="flex items-center justify-between w-full col-span-2 bg-white rounded-lg shadow min-h-full
					p-2
					xs:p-3
					sm:p-6"
>
	<div class="flex flex-col mx-auto">
		<div class="relative">
			<svg
				class="2xs:absolute mx-auto 2xs:mx-0 left-0 w-10 h-10 text-red-700 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 125"
			>
				<path
					d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
				/>
			</svg>
			<p
				class="mt-2 text-sm text-gray-600
							 	text-center	 
								2xs:pl-12 2xs:text-left
								sm:text-base 
							   	lg:text-sm 
								xl:text-base"
			>
				<slot name="quote">
                    <span class="text-red-300">Wait a minute... Why isn't there a real quote right here?</span>
                </slot>
			</p>
		</div>

		<h3
			class="items-center text-center 2xs:text-left 2xs:pl-12 mt-3 text-sm font-medium leading-5 text-maintext sm:text-base lg:text-base"
		>
			<slot name="person">
                <span class="text-red-300">Bro, a quote NEEDS a reference to the person who quoted it.</span>  


            </slot>
            -
            <p class="inline text-gray-500">
                <slot name="reference"> 
                    <span class="text-red-300">
                        Profession spot
                    </span>
                </slot>
            </p>

		</h3>
	</div>
	<img
		class="hidden sm:block sm:ml-4 w-24 h-24 bg-gray-300 rounded-full"
		src="../{src}"
		alt="Testimonial Woman"
	/>
</blockquote>
