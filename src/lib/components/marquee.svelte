<script>
	import Marquee from 'svelte-fast-marquee';

	export let data = [
		'Revibe "24',
		'★',
		'April 27',
		'★',
		'09:00 AM - 05:00 PM',
		'★',
		'Get Your Tickets Now',
		'★',
		'Revibe "24',
		'★',
		'April 27',
		'★',
		'09:00 AM - 05:00 PM',
		'★',
		'Get Your Tickets Now',
		'★',
		'Revibe "24',
		'★',
		'April 27',
		'★',
		'09:00 AM - 05:00 PM',
		'★',
		'Get Your Tickets Now',
		'★'
	];
</script>

<div class="bg-black text-white py-2 text-base font-display">
	<Marquee>
		<ul>
			{#each data as item}
				<li class="inline-block px-2">{item}</li>
			{/each}
		</ul>
	</Marquee>
</div>
