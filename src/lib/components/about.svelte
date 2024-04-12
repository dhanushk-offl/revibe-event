<script>
	export let About = [
		{
			img: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1704571115/Revibe/About_Revibe_r0jir0.webp',
			alt: 'About Revibe',
			head: 'Revibe 2024',
			para: "Revibe, a vibrant event by the Students Guidance Cell at CAHCET, showcased diverse talents in a day-long celebration. Students competed enthusiastically, mingled across departments, and received guidance from professionals, creating a lively, memorable experience. This standout cultural event united the college and highlighted students' passion for the arts, promising more engaging gatherings in the future."
		},
		{
			img: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1704571127/Revibe/about_svg_tndrzu.webp',
			alt: 'About SGC',
			head: 'SGC',
			para: "SGC, established in 2010 by Tanveer Ahmed and Mohammed Imran, is dedicated to empowering students professionally. Grounded in the mantra 'of, for, and by the students,' SGC organizes diverse events, unveiling hidden talents. Through these initiatives, it nurtures skills, ensuring remarkable career outcomes and aspiring to elevate students' professionalism to new heights."
		}
	];
</script>

<section id="about">
	<div class="p-10">
		<div class="w-full h-fit">
			<div class="grid grid-rows gap-16 justify-items-center">
				<div>
					<h1
					class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
				>
					About
				</h1>
				</div>
				<div class="dl:p-10 flex flex-col md:flex-row lg:flex-row lg:gap-20 gap-10 justify-center">
					{#each About as about}
						<div>
							<div class="relative">
								<img class='lg:object-cover lg:cursor-pointer lg:filter lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300' src={about.img} alt={about.alt} />
								<div
									class="absolute bottom-0 dl:top-56 md:top-28 dl:p-10 lg:top-48 ds:top-[18rem] flex flex-col p-5"
								>
									<span
										class="text-white ms:text-2xl dl:text-6xl md:text-3xl ds:text-6xl text-4xl lg:text-4xl font-semibold font-display mb-2"
										>{about.head}</span
									>
									<span
										class="text-white ms:text-[6px] dl:text-xl mm:text-xs ds:text-xl text-xs lg:text-sm md:text-xs font-semibold text-justify"
										>{about.para}</span
									>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
