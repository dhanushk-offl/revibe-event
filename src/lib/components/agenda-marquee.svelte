<script>
	import Marquee from 'svelte-fast-marquee';

	export let data = [
		'Revibe "24',
		'PPT',
		'Tech-Quiz',
		'Coding & Debugging',
		'Web Designing',
		'Photography',
		'BGMI And Free Fire',
		'Connections',
		'Chess',
		'Art (Pencil Or Painting)',
		'Cooking Without Fire(CWF)',
		'Revibe "24',
		'PPT',
		'Tech-Quiz',
		'Coding & Debugging',
		'Web Designing',
		'Photography',
		'BGMI And Free Fire',
		'Connections',
		'Chess',
		'Art (Pencil Or Painting)',
		'Cooking Without Fire(CWF)'
	];
</script>

<div class="bg-black text-white py-2 my-8 Lg:my-20 text-base font-display -rotate-2">
	<Marquee>
		<ul>
			{#each data as item}
				<li class="inline-block px-4">{item}</li>
			{/each}
		</ul>
	</Marquee>
</div>
