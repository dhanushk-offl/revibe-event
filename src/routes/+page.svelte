<script>
    import Marquee from '$lib/components/marquee.svelte'
    import About from '$lib/components/about.svelte'
    import AgendaMarquee from '$lib/components/agenda-marquee.svelte'
    import Agenda from '$lib/components/agenda.svelte'
    import Gallery from '$lib/components/gallery.svelte'            
    import Contact from '$lib/components/contact.svelte'
    import Sponsers from '$lib/components/sponsers.svelte'
    import Hero from '$lib/components/hero.svelte'
</script>
<svelte:head>
    <title>Revibe 2024 - SGC</title>
    <link rel="icon" href="https://res.cloudinary.com/dwir71gi2/image/upload/v1712800478/LogoOnly__1_-removebg-preview_qbeuyp.png" type="image/x-icon"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />
</svelte:head>
<div>
    <Hero /><br><br>
    <Marquee />
    <About />
    <AgendaMarquee />
    <Agenda />  
    <Sponsers />
    <Gallery />
    <Contact />
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>

