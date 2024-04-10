<script lang="ts">
	import type { modelagenda } from '$lib/type';

	export let events: modelagenda[];
	let showMore = events.map(() => false); // initialize all to false
</script>

<div class="gap-6 flex flex-col w-full">
	{#each events as event, i}
		<div class="p-6 gap-6 flex flex-col sm:flex-row w-full">
			<img src={event.eventimage} alt={event.eventname} class="w-48 h-48 rounded-xl" />

			<div class="flex flex-col items-start justify-between gap-2">
				<div>
					<h1 class="text-xl font-semibold tracking-tight">{event.eventname}</h1>

					<p class="mt-1 font-mono text-sm text-gray-500 w-full flex">
						{event.price}<br />{event.eventtiming}
					</p>

					<p class="mt-1">
						{#if event.description.length > 0}
							{showMore[i] && event.description
								? event.description
								: event.description.slice(0, 100) + '...'}

							<button
								class="text-blue-500 hover:underline"
								on:click={() => (showMore[i] = !showMore[i])}
							>
								{showMore[i] ? 'Show less' : 'Show more'}
							</button>
						{/if}
					</p>

					{#if event.tags}
						{#each event.tags as tag}
							<span
								class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2 mt-2"
							>
								{tag}
							</span>
						{/each}
					{/if}
				</div>

				<div
					id="social"
					class="flex flex-row gap-6 items-start w-full justify-start text-gray-500 mt-2"
				>
						<a
							id="website"
							href={event.register}
							class="hover:cursor-pointer hover:text-blue-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-world"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
								<path d="M3.6 9h16.8" />
								<path d="M3.6 15h16.8" />
								<path d="M11.5 3a17 17 0 0 0 0 18" />
								<path d="M12.5 3a17 17 0 0 1 0 18" />
							</svg>
						</a>
				</div>
			</div>
		</div>
	{/each}
</div>