<script lang="ts">
	import { scale } from 'svelte/transition';
	import { clsx } from '$lib/utils';
	import { quintOut } from 'svelte/easing';
	export let showModal: boolean = false;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
	else if (dialog && !showModal) dialog.close();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	transition:scale={{ duration: 150, opacity: 0.5, easing: quintOut }}
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	on:keydown|self={(e) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			e.stopPropagation();
			dialog.close();
			showModal = false;
		}
	}}
	class={clsx(
		'fixed inset-0 z-10 m-auto w-full max-w-5xl shadow-xl shadow-blue-900/5 items-center justify-center overflow-auto rounded-lg border border-gray-200 shadow-3xl backdrop:bg-white/40 backdrop:backdrop-blur-sm open:scale-100 open:transform-gpu open:transition-transform open:duration-75 open:ease-in-out',
		showModal ? 'scale-0' : 'hidden'
	)}
>
	<div class="m-3 absolute top-4 right-4 text-gray-500">
		<button on:click={() => dialog.close()}> Close</button>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click|stopPropagation
		class="flex w-full flex-col"
		on:keydown|self={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				e.stopPropagation();
			}
		}}
	>
		<slot />
	</div>
</dialog>