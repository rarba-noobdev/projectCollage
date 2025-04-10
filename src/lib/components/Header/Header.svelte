<script lang="ts">
	import { getUserState } from '../state/user.svelte';
	let userContext = getUserState();
	let { user } = $derived(userContext);
</script>

<header
	class="sticky top-0 z-10 flex items-center justify-between border-b-4 border-indigo-800 bg-indigo-950 px-6 py-4 text-white shadow-lg shadow-indigo-900/30"
>
	<h1 class="text-2xl font-extrabold tracking-tight md:text-3xl">
		<a
			href="/"
			class="flex items-center gap-2 transition-colors duration-200 hover:text-indigo-400"
		>
			<span class="text-indigo-300">🐙</span>
			<span class="hidden md:inline">Crescent</span>
		</a>
	</h1>
	<div class="flex items-center gap-10">
		<nav class="flex items-center gap-8">
			<a
				href="/"
				class="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
			>
				Home
			</a>
			<a
				href="/about"
				class="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
			>
				About
			</a>
			<a
				href="/contact"
				class="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
			>
				Contact
			</a>
		</nav>

		{#if !user}
			<a
				href="/register"
				class="rounded-full bg-indigo-700 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-600 hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
			>
				Register / Login
			</a>
		{:else}
			<button
				aria-label="Logout"
				onclick={() => userContext.logOut()}
				class="rounded-full bg-indigo-700 p-2 text-white shadow-md shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-600 hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="h-5 w-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
					/>
				</svg>
			</button>
		{/if}
	</div>
</header>
