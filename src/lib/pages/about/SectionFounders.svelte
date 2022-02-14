<script>
    import { companyName } from '$stores'
</script>

<section>
    <h1
        style="margin-top: -0.45rem"
        class="text-center mx-auto mb-4 text-5xl xs:text-6xl h-fit overflow-visible min-w-fit font-bold tracking-tight text-gray-900 sm:leading-none"
    >
        Our Founders
    </h1>
    <div class="flex flex-col lg:flex-row lg:gap-6">
        <div class="flex-col text-center justify-center mx-auto xl:px-10 w-50">
            <img src="John.png" alt="John" width="500" height="1000" class="mx-auto" />
            <h3 class="text-2xl my-2 mb-1 text-center font-bold text-gray-700">John</h3>
            <p class="text-center mb-4 sm:mb-0">
                "I never saw myself where I am today--a young entrepreneur, partnering with a college
                roommate to spend five years creating a charting app. But I don't regret a minute of it. {$companyName}
                feels like a part of me now and I love seeing people's positive reactions to it."
            </p>
        </div>
        <div class="flex-col justify-center mx-auto xl:px-10 w-50">
            <img src="Paul.png" alt="Paul" width="500" height="1000" class="mx-auto" />
            <h3 class="text-2xl mt-2 mb-1 text-center font-bold text-gray-700">Paul</h3>
            <p class="text-center">
                "I've dreamt of creating my own app since middle school. Now, with {$companyName}, that
                dream has become a reality for me. I hope that {$companyName} can make life easier for people
                who want to create presentations or anything else that needs charts."
            </p>
        </div>
    </div>
</section>