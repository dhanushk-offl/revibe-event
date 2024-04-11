<script>
    import TechEvents from "./techevents.svelte";
    import NonTech from "./nontech.svelte";
    import Games from "./games.svelte";
</script>
<svelte:head>
    <title>Revibe'24 Events</title>
</svelte:head>
<h2 class="text-lg font-sans font-bold text-center text-black">Technical Events Details</h2>
<TechEvents /><br>
<h2 class="text-lg font-sans font-bold text-center text-black">Non Tech Events</h2>
<NonTech />
<h2 class="text-lg font-sans font-bold text-center text-black">Games</h2>
<Games />
<svelte:body></svelte:body>

