<script>
	//A variable to bind the modal component
	let modalComponent;

	export let first, last, email, message;

	async function postForm() {
		const submit = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				first,
				last,
				email,
				message
			})
		});
	}
</script>

<form
	on:submit|preventDefault
	method="POST"
	action="/api/contact"
	class="w-10/12 max-w-lg mx-auto my-10 p-10 bg-violet-100 rounded-xl shadow-lg"
>
	<!-- Form Element Container, GRID -->
	<div class="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4">
		<div class="sm:col-span-2">
			<label for="first-name" class="block text-sm font-medium text-gray-700"> First name </label>
			<div class="mt-1">
				<input
					bind:value={first}
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="given-name"
					placeholder="John"
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					required
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
			<div class="mt-1">
				<input
					bind:value={last}
					type="text"
					name="last-name"
					id="last-name"
					autocomplete="family-name"
					placeholder="Smith"
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					required
				/>
			</div>
		</div>
		<div class="col-span-2 sm:col-span-4">
			<label for="email" class="block text-sm font-medium text-gray-700" required>
				Email address
			</label>
			<div class="mt-1">
				<input
					bind:value={email}
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					placeholder="you@example.com"
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					required
				/>
			</div>
		</div>
		<div class="col-span-2 sm:col-span-4">
			<label for="message" class="block text-sm font-medium text-gray-700" required>
				Message
			</label>
			<div class="mt-1">
				<textarea
					bind:value={message}
					id="message"
					name="message"
					rows="3"
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					required
				/>
			</div>
		</div>
	</div>
	<div class="pt-5">
		<div class="flex justify-end">
			<button
				type="reset"
				class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Clear
			</button>
			<button
				type="submit"
				class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Send
			</button>
		</div>
	</div>
</form>
