<script>
    import TechEvents from "./techevents.svelte";
    import NonTech from "./nontech.svelte";
    import Games from "./games.svelte";
</script>
<svelte:head>
    <title>Revibe'24 Events</title>
    <link rel="icon" href="https://res.cloudinary.com/dwir71gi2/image/upload/v1712800478/LogoOnly__1_-removebg-preview_qbeuyp.png" type="image/x-icon"/>
</svelte:head>
<h2 class="flex flex-row flex-nowrap items-center mt-24">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        Technical Events
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2><br><br>
<TechEvents />
<h2 class="flex flex-row flex-nowrap items-center mt-24">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        Non - Technical Events
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
<NonTech />
<h2 class="flex flex-row flex-nowrap items-center mt-24">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        Games
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
<Games />


