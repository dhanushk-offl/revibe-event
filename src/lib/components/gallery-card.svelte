<script>
    import { redirectToRegister } from './utils';
    import GalleryCard from './gallery-card.svelte';
    import { gallery } from '$lib/data/data';
</script>

<section id="gallery">
    <div class="overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-12 bg-black">
            <div class="mb-10">
                <h1 class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-white bg-clip-text bg-gray">
                    Memories
                </h1>
            </div>
            <div>
                <div class="flex flex-col items-center lg:flex-row lg:justify-between">
                    <span class="text-sm lg:text-lg xl:text-3xl text-white font-display font-regular mb-4 lg:mb-0">Experience this gallery in real</span>
                    <button onclick={redirectToRegister} class="bg-white text-[10px] lg:text-sm xl:text-2xl rounded-full py-1 px-3">Get your tickets now</button>
                </div>
            </div>
            <div>
                {#each gallery as image}
                    <GalleryCard {image} />
                {/each}
            </div>
        </div>
    </div>
</section>
