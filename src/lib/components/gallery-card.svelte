<script lang="ts">
    import { gallery } from '$lib/data/data';
    import Marquee from 'svelte-fast-marquee';
    export let pic_res =
        'mx-5 ms:w-48 ms:h-24 mm:w-60 mm:h-32 ml:w-72 ml:h-40 md:w-80 md:h-48 lg:w-96 lg:h-56 ds:w-96 ds:h-56 dl:w-120 dl:h-64';
</script>

<div class="relative z-50 mt-20"> <!-- Add relative positioning and z-index to the gallery container -->
    <div>
        <div class="w-full ">
            <img class="w-full ds:h-[80px] " src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
        <Marquee speed={70} class="flex flex-col z-10 mt-[-1rem] ms:mt-[-1rem]  md:mt-[-2rem] lg:mt-[-2.2rem] relative">
            {#each gallery as gallery}
                <img class={pic_res + ' mt-4'} src={gallery.pic} alt={gallery.des} /> <!-- Add margin-top to images -->
            {/each}
        </Marquee>
        <div class="w-full mt-[-1rem] ms:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2.2rem]">
            <img class="w-full ds:h-[20px]" src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
    </div>

    <div>
        <div class="w-full ">
            <img class="w-full ds:h-[80px] " src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
        <Marquee speed={70} direction="right" class="flex flex-col z-10 mt-[-1rem] ms:mt-[-1rem]  md:mt-[-2rem] lg:mt-[-2.2rem] relative">
            {#each gallery as gallery}
                <img class={pic_res + ' mt-4'} src={gallery.pic} alt={gallery.des} /> <!-- Add margin-top to images -->
            {/each}
        </Marquee>
        <div class="w-full mt-[-1rem] ms:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2.2rem]">
            <img class="w-full ds:h-[80px]" src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
    </div>
</div>
