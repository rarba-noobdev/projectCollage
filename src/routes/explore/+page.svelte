<script>
	// import { events } from './events.svelte';
	let { data } = $props();
	let { events } = data;
	console.log(events[0]);
</script>

<section class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-8 font-sans">
	<div class="mx-auto max-w-7xl">
		<!-- Header Section -->
		<div class="mb-12">
			<div class="mb-4 inline-flex items-center gap-3">
				<div class="h-0.5 w-10 bg-indigo-400"></div>
				<span class="text-sm font-medium tracking-wider text-indigo-400">UPCOMING EVENTS</span>
			</div>
			<h1 class="mb-2 text-5xl font-bold leading-tight tracking-tight text-white">
				Discover Our <span
					class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
					>Tech Events</span
				>
			</h1>
			<p class="max-w-2xl font-light text-gray-400">
				Join the most innovative gatherings at Crescent Institute of Technology. Network with
				experts and expand your knowledge.
			</p>
		</div>

		<!-- Events Grid -->
		<div
			class="custom-scrollbar grid max-h-[calc(100vh-220px)] grid-cols-1 gap-8 overflow-y-auto pr-3 md:grid-cols-2 lg:grid-cols-3"
		>
			{#each events as e}
				<article
					class="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-800/50 p-6 transition-all duration-300 hover:border-gray-700/50 hover:bg-gray-800/70 hover:shadow-xl"
				>
					<!-- Accent Glow -->
					<div
						class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						style="box-shadow: 0 0 0 1px {e.color}20, 0 0 30px 0 {e.color}10;"
					></div>

					<!-- Event Status Badge -->
					{#if e.is_sold_out}
						<div
							class="absolute -right-8 -top-8 flex h-32 w-32 rotate-45 items-end justify-center bg-red-500/10 pb-2 backdrop-blur-sm"
						>
							<span
								class="translate-y-6 rotate-[-45deg] text-[10px] font-bold uppercase tracking-wider text-red-300"
								>Sold Out</span
							>
						</div>
					{/if}

					<div class="z-10 mb-5 flex items-start justify-between">
						<h3 class="pr-4 text-xl font-bold text-white">{e.name}</h3>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full"
							style="background-color: {e.color}20;"
						>
							<svg
								class="h-4 w-4"
								style="color: {e.color};"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
					</div>

					<!-- Date & Time -->
					<div class="z-10 mb-6 flex flex-col gap-3">
						<div class="flex items-center text-sm text-gray-400">
							<svg
								class="mr-3 h-4 w-4 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.8"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								></path>
							</svg>
							<span>{e.start_date} - {e.end_date}</span>
						</div>

						<div class="flex items-center text-sm text-gray-400">
							<svg
								class="mr-3 h-4 w-4 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.8"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>{e.time}</span>
						</div>

						<div class="flex items-center text-sm text-gray-400">
							<svg
								class="mr-3 h-4 w-4 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.8"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.8"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
							<span>{e.location}</span>
						</div>
					</div>

					<!-- Description -->
					<div class="z-10 mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
						{e.description}
					</div>

					<!-- Footer -->
					<div class="z-10 mt-auto border-t border-gray-700/40 pt-5">
						<div class="mb-4 flex items-center justify-between">
							<div class="text-lg font-bold" style="color: {e.color};">
								₹ {e.price}
							</div>
							<div class="text-xs font-medium text-gray-500">
								<span class="text-gray-300">{e.booked_slots}</span> / {e.max_slots} slots
							</div>
						</div>

						<!-- Progress Bar -->
						<div class="relative mb-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-700/50">
							<div
								class="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
								style="width: {(e.booked_slots / e.max_slots) *
									100}%; background: linear-gradient(90deg, {e.color}, {e.color}d9);"
							></div>
						</div>

						<div class="flex items-center justify-between">
							<span class="text-xs font-medium text-gray-500">Registration</span>
							<span class="text-xs font-medium" style="color: {e.color};"
								>{Math.round((e.booked_slots / e.max_slots) * 100)}% booked</span
							>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: rgba(31, 41, 55, 0.3);
		border-radius: 10px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(129, 140, 248, 0.4);
		border-radius: 10px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: rgba(129, 140, 248, 0.6);
	}
</style>
