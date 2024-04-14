<script lang="ts">
    import { gallery } from '$lib/data/data';
    import Marquee from 'svelte-fast-marquee';
    export let pic_res =
        'mx-5 ms:w-36 ms:h-16 mm:w-48 mm:h-24 ml:w-56 ml:h-32 md:w-60 md:h-40 lg:w-72 lg:h-44 ds:w-80 dl:w-96 dl:h-52';
</script>

<div class="mt-20"> <!-- Add margin-top to prevent overlap with navbar -->
    <div>
        <div class="relative z-50 w-full ">
            <img class="w-full ds:h-[80px] " src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
        <Marquee speed={70} class="flex flex-col z-10 mt-[-1rem] ms:mt-[-1rem]  md:mt-[-2rem] lg:mt-[-2.2rem] relative">
            {#each gallery as gallery}
                <img class={pic_res + ' mt-4'} src={gallery.pic} alt={gallery.des} /> <!-- Add margin-top to images -->
            {/each}
        </Marquee>
        <div class="relative z-50 w-full mt-[-1rem] ms:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2.2rem]">
            <img class="w-full ds:h-[20px]" src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
    </div>

    <div>
        <div class="relative z-50 w-full ">
            <img class="w-full ds:h-[80px] " src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
        <Marquee speed={70} direction="right" class="flex flex-col z-10 mt-[-1rem] ms:mt-[-1rem]  md:mt-[-2rem] lg:mt-[-2.2rem] relative">
            {#each gallery as gallery}
                <img class={pic_res + ' mt-4'} src={gallery.pic} alt={gallery.des} /> <!-- Add margin-top to images -->
            {/each}
        </Marquee>
        <div class="relative z-50 w-full mt-[-1rem] ms:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2.2rem]">
            <img class="w-full ds:h-[80px]" src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1704810015/Revibe/Ellipse_2_sypezw.webp" alt="gallery-banner" />
        </div>
    </div>
</div>
