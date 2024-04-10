<script lang="ts">
	import { agenda } from '$lib/data/data';
	import AgendaCard from '$lib/components/agenda-card.svelte';
    import Modal from '$lib/components/modal.svelte';
    import { clsx } from '$lib/utils';
    import type { modelagenda } from '$lib/type';
    import EventCard from '$lib/components/event-card.svelte';
    let showModal = false;
    let active_event: modelagenda[] = [
		{ eventname: '', eventimage: '', eventtiming: '', price: '', description: '', tags: [], register:'' }
	];

	function handleModelAgenda(e: CustomEvent<modelagenda[]>) {
		showModal = true;
		active_event = e.detail;
	}
</script>
<Modal bind:showModal>
	<div class="gap-6 flex flex-col sm:flex-row w-full">
		<EventCard events={active_event} />
	</div>
</Modal>
<section id="agenda">
	<div class="px-2 py-10">
		<div>
            <div class="grid grid-rows gap-16 justify-items-center">
                <div>
                    <h1
                    class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
                >
                    Agenda & Events
                </h1>
				</div>
                <div>
                
                    <AgendaCard {agenda}  on:eventname={handleModelAgenda}/>
                
                </div>
            </div>
        </div>
	</div>
</section>
