<!-- Registration.svelte -->
<script>
	import Header from '$lib/components/Header/Header.svelte';

	// let { form } = $props();
	// $inspect(form);
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-12 text-gray-100 sm:px-6 lg:px-8"
>
	<div class="mx-auto w-full max-w-md">
		<!-- Registration Form Card -->
		<section
			class="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-xl shadow-indigo-500/10"
		>
			<div class="border-b border-gray-800 bg-gray-800/50 px-6 py-5">
				<div class="flex items-center justify-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-indigo-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4v1m0 14v1m-8-8h1m14 0h1M5.636 5.636l.707.707M18.364 18.364l-.707-.707M5.636 18.364l.707-.707M18.364 5.636l-.707.707M12 8v4l2 2"
						/>
					</svg>
					<h2 class="text-xl font-bold text-indigo-300">Student Registration</h2>
				</div>
			</div>

			<form method="POST" class="space-y-5 p-6" aria-labelledby="register-heading">
				<div class="space-y-1">
					<label for="name-input" class="block text-sm font-medium text-gray-300">
						Full Name
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-6 2.686-6 6h12c0-3.314-2.686-6-6-6z"
								/>
							</svg>
						</div>
						<input
							id="name-input"
							name="name"
							type="text"
							class="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-colors duration-200 hover:border-indigo-500/50 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
							placeholder="Enter your full name"
							value="ffharish"
							required
						/>
					</div>
				</div>

				<div class="space-y-1">
					<label for="rrn-input" class="block text-sm font-medium text-gray-300">
						Registration Number (RRN)
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-4m-4 0V4a2 2 0 114 0v2m-4 0h4m-8 6h8"
								/>
							</svg>
						</div>
						<input
							name="rrn"
							id="rrn-input"
							class="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-colors duration-200 hover:border-indigo-500/50 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
							placeholder="Enter your RRN (e.g., 123456)"
							required
						/>
					</div>
				</div>

				<div class="space-y-1">
					<label for="password-input" class="block text-sm font-medium text-gray-300">
						Password
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.761 0-5 2.239-5 5h10c0-2.761-2.239-5-5-5zm5-7h2M5 6h2"
								/>
							</svg>
						</div>
						<input
							id="password-input"
							name="password"
							type="password"
							class="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-colors duration-200 hover:border-indigo-500/50 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
							placeholder="Create a strong password"
							required
						/>
					</div>
				</div>

				<div class="space-y-1">
					<label for="department-select" class="block text-sm font-medium text-gray-300">
						Department
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
								/>
							</svg>
						</div>
						<select
							id="department-select"
							name="departments"
							class="w-full appearance-none rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-10 text-gray-200 transition-colors duration-200 hover:border-indigo-500/50 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
							required
						>
							<option value="" disabled selected>Choose your department</option>
							<option value="civil-engineering">Civil Engineering</option>
							<option value="mechanical-engineering">Mechanical Engineering</option>
							<option value="computer-science-engineering">Computer Science & Engineering</option>
							<option value="information-technology">Information Technology</option>
							<option value="biotechnology">Biotechnology</option>
							<option value="electrical-electronics-engineering"
								>Electrical and Electronics Engineering</option
							>
							<option value="electronics-communication-engineering"
								>Electronics and Communication Engineering</option
							>
						</select>
						<span
							class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-indigo-400"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</span>
					</div>
				</div>

				<div class="pt-2">
					<button
						type="submit"
						class="mt-4 flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-md shadow-indigo-500/20 transition-colors duration-200 hover:bg-indigo-700 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
					>
						Register
					</button>
				</div>
			</form>

			<div class="border-t border-gray-800 bg-gray-800/50 px-6 py-4 text-center">
				<p class="text-xs text-gray-400">Already registered?</p>
				<a
					href="/login"
					class="mt-1 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300"
					>Login</a
				>
			</div>
		</section>
	</div>
</div>
