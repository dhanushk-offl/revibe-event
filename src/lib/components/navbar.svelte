<script>
	function redirectToRegister() {
		window.location.href = '/register';
	}

	// @ts-ignore
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="font-display font-semibold">
	<ul class="flex gap-4 justify-center">
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="#about" on:click|preventDefault={scrollIntoView}>About</a>
		</li>
		<li>
			<a href="#agenda" on:click|preventDefault={scrollIntoView}>Agenda</a>
		</li>
		<li>
			<a href="#gallery" on:click|preventDefault={scrollIntoView}>Gallery</a>
		</li>
		<li>
			<a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
		</li>
		<li>
			<button on:click={redirectToRegister}>Register</button>
		</li>
	</ul>
</div>
