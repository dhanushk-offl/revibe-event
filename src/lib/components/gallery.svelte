<script>
    function redirectToRegister() {
		window.location.href = '/register';
	}
    import GalleryCard from "./gallery-card.svelte";
</script>

<section id="gallery">

    <div class="overflow-hidden">

        <div class="grid grid-rows gap-1 justify-items-center py-12 bg-black">

            <div class="mb-10">

                <h1
                class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-white bg-clip-text bg-gray"
            >
                Memories
            </h1>

            </div>
            <div>
                <div class=" relative z-100 flex flex-row align-middle gap-4">
                    <span class="text-sm lg:text-lg dl:text-3xl text-white font-display font-regular">Experience this gallery in real</span>
                   <a href="https://revibe-sgc.rf.gd/register" target="_blank"><button class="align-middle text-center rounded-full bg-white py-1 px-3 dl:text-2xl lg:text-sm text-[10px]">Get your tickets now</button></a>
                </div>
            </div>
            <div>

                <GalleryCard />

            </div>

        </div>

    </div>

</section>
