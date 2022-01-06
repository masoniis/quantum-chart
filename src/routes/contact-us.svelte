<main class="min-h-screen">
	<div class="text-center mx-auto">
		<h4 class="pb-4">Have a question?</h4>
		<h1 class="pb-4 text-4xl">Contact Us</h1>
		<p>
			We're here to help and ready to answer any questions that you have for us. We look forward to
			hearing from you!
		</p>
	</div>

	<form class="w-full mx-auto max-w-lg bg-gray-400 border-5 rounded-xl">

		<!-- Form Element Container -->
		<div class="flex flex-wrap mx-3 mb-6 mt-24 py-5">
			<!-- First Name Box -->
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label class="block tracking-wide font-bold mb-2 text-xs text-slate-800" for="form-first-name"> FIRST NAME </label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="form-first-name" placeholder="John" />
			</div>

			<!-- Last Name Box -->
			<div class="w-full md:w-1/2 px-3">
				<label class="block tracking-wide font-bold mb-2 text-xs text-slate-800" for="form-last-name"> LAST NAME </label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="form-last-name" placeholder="Smith" />
			</div>

			<!-- Email Box -->
			<div class="w-full px-3">
				<label class="block tracking-wide font-bold mb-2 text-xs text-slate-800" for="form-email"> EMAIL </label>
				<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="form-email" />
			</div>

			<!-- Message Box -->
			<div class="w-full px-3">
				<label class="block tracking-wide font-bold mb-2 text-xs text-slate-800" for="form-message"> MESSAGE </label>
				<textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="form-message" />
			</div>
		</div>
	</form>

	<div class="mx-0 px-0 min-w-full py-6 bg-red-400">

		<!-- Contact Info -->
		<div class="flex flex-col shadow-lg ">
			
			<!-- Flex Item 1 -->
			<div class="font-bold text-xl">
				Contact Info
			</div>
			
			<!-- Flex Item 2 -->
			<div>
				<div>
					Location
				</div>
				<div>
					Phone
				</div>
				<div>
					Email
				</div>
			</div>
		</div>
	</div>
</main>
