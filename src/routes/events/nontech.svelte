
<script>
    const cards = [
      {
        id: 1,
        productName: 'Cooking Without Fire',
        productDetails: ["There should be two/three members in a team and TIMING: 11.00am -12.30pm @EEE Seminar Hall", "Participants should be present 10mintues prior at the venue & total preparation time: 1hr.", "All the ingredients, equipment & vessels required for cooking should be brought by the participants themselves, only working table will be provided.", "Electric mixer-jar will be provided by us & Participants should not bring any chopped or grated raw vegetables/fruits.", "They should do it on the spot within the allotted time(no prior preparation allowed)", "Participants should not bring any pre-cooked items(boiled)", "Participants are supposed to display a chart having the names of ingredients for each dish they have prepared.", "Participants can bring non-electric equipment’s like mixer, chopper, juicer, grater etc… & Heating by any method is not permitted.", "The prepared cooking items should be hygienic and Participants should clean their respective work places after the preparation over.", "The Evaluation will be based on the taste of the dish, nutritional level, cleanliness, creativity and presentation (The name of the dish should be unique), The best dish will be Awarded andparticipation certificate will be provided to all participants."],
        price: 'Rs. 200 /Team (For 3 Participants in a Team Rs. 250)',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1713107707/fatima-akram-xhCOgeoDSs-unsplash-e1632860020420_qnbbxg.jpg', // Sample image URL
        contact:["Priya: 6385356926", "Thaseem", "Kamali", "Jaheen: 8148809436", "Ajay: 6374398086", "Shafifa Naaz"],
        judges:"FACULTIES"
      },
      {
        id: 2,
        productName: 'Connections',
        productDetails: ["Timing: 01:30 PM - 03:00 PM @MBA Seminar Hall", "Participants can participate either individually or as a team.", "Each team can contain upto 3 members maximum.", "There will be a minimum of three rounds and a maximum of five rounds.", "Participants will be provided pen and paper to write the answers.", "After each round will be monitored by the coordinators and evaluated by the judges.", " Everyone should be on time.", " Questions will be non technical and from all the perspective."],
        price: 'Rs. 50 /Head',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1713110348/conx_fwo5lu.png', // Sample image URL
        contact:["Seneha", "Abubakkar Siddique - 9842028191", "Harish – 8098994170", "Shweatha"],
        judges:""
      },
      {
        id: 3,
        productName: 'Act Like a GOAT',
        productDetails: ["Timings: 01.30 PM to 03.00 PM @Auditorium", "Team participation only (2 / 3 members)", "In Round 1: Each team will select one of the scenes from a lot, and one of the members should act out the scene exactly.   Each scene may only contain 20-40 seconds of a clip. Many genres are available.", "In Round 2: Particular genres selected by lots. Dialogue delivery and expressions are very important in this phase.Each scene would contain a maximum of 50 seconds of dialogue.", "Be punctual to the event.", "Don't hesitate to show talent in front of others, so be bold.", "You will be given 3-5 minutes to prepare the scene.", " Judges' evaluation is the final decision."],
        price: 'Rs. 100 per Team',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712939318/goat_zxwgzy.jpg', // Sample image URL
        contact:["Varun: 6383036342", "Dhanush: 6381273532"],
        judges:"Varun, Dhanush & Mohammed Abbas"
      },
      {
        id: 4,
        productName: 'Photography',
        productDetails: [
    "Only Solo participation is allowed.",
    "Photo should be uploaded on given email-id (email: sgcrevibe24@gmail.com)",
    "Uploading time: 10.30am to 1.30pm (3hrs)",
    "Everyone should submit the photo within the given time.",
    "No DSLR camera should be used, only the Mobile camera is allowed.",
    "Photoshop should not be done, but basic edits can be done. The use of any editing apps apart from basic editing software is prohibited.",
    "There should be no watermark.",
    "No irrelevant pictures should be uploaded.",
    "The photo must be taken within the college campus.",
    "Everyone should upload only one photo.",
    "Everyone should upload the photo to the given mail id and all must mention Name, Department, pursuing year, College Name.",
    "Mention the category below the photo and the Topic chosen.",
    " Failure to give your response on time or violation of rule will result in rejection with no refund",
    "Capturing the best picture and submitting it within the given time will be awarded. (Note: All participants will receive a participation certificate.)", "Category_1: Open Photography (You can use any topic here, but you have to mention the reason why you have chosen this topic and add a caption below the post)", "Category 2: Explore themes like Natural photography, Candid moments, College Architecture, Beautiful landscape, Reflection, Nostalgic moments, Emotions, Human Interaction with Nature, and Hidden Gems."],
        price: 'Rs. 50 /Head',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712938855/photgraphy_l9xi8q.jpg', // Sample image URL
        contact:["Priya: 6385356926"],
        judges:"Priya, Zaina, Dhurga Prasad"
      },
      {
        id: 5,
        productName: 'Art (Pencil/ Painting)',
        productDetails: [
    "Event Timings: 01:30 PM to 02:30 PM @Mechnical Block",
    "Participants must be prepared to start and finish their paintings within the designated time.",
    "Participants are not allowed to bring pre-made drawings or paintings.",
    "A3 sheets will be provided by us but other stationeries and things for the artwork must be brought by the individual.",
    "The topics are listed below, and participants must draw only based on the topic they select.",
    "The winner will be decided based on the theme and adherence to the rules of competitions.",
    "Participants can have a reference picture from their phone to see and draw.",
    "Topics for pencil sketches: the journey of life from birth to old age, portraits of loved ones or famous figures, architectural details or buildings, and fantasy creatures or characters like anime favorites",
    "Topics for Paintings: Painting art inspired by famous painting artists, exploring themes of freedom and social change, capturing the starry night, and illustrating a scene from a chosen song.",
"Two first prizes will be awarded based on two categories: Paintings, which encompass watercolors, oil pastels, and color pencils & Pencil sketches, restricted to various shades of pencils only."
  ],
        price: 'Rs. 50 /Head',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712929038/1art_sbhnrh.jpg', // Sample image URL
        contact:["Jaya Surya : 9344147861", "Sathakathulla S : 6385356926"],
        judges:"Yumnah Safiya, Sathakathulla S (Senior Pencil Sketchist), Jaya Suryaa, Mohammed Abuzar"
      },
      {
        id: 6,
        productName: 'Meme Creation',
        productDetails: ["Timing: 10.30 AM - 02:00 PM @Auditorium", "Create Your memes about College Life, Reality Shows, College Placements, Social, Elections and IPL", "Participants can submit only one meme", "Participant's meme should be based on one of the categories mentioned above.", "Participants' memes should have a minimum image quality of 2MP.", "Participants must not submit offensive, plagiarized, or 18+ memes.", "Participants must submit their memes through the Google form provided and Participants must make submissions before the specified deadline to be considered.", "Participants are not allowed to argue over judges' decisions. The decision of the judges will be final.", "Participants must respect their teammates and opponents.  Participant's language used in the memes should be appropriate and respectful.", "Judging Criteria: 30% of Orginality, 30% of Humor, 20% of Creativity, 10% of Image Quality and 10% of Adherence to Theme."],
        price: 'Rs. 50 /Head',
        imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712937965/uGB45ZXg_400x400_pcim9i.jpg', // Sample image URL
        contact:["Zayd Bilal: 7708527860", "Rafique: 98439 88538", "Abdul Bari: 95972 25564"],
        judges:"Zyad Bilal, Abdul Bari and Rafique"
      }
      // Add more cards as needed
    ];
  </script>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each cards as card}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img class="w-full h-48 object-cover" src={card.imageURL} alt={card.productName} />
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">{card.productName}</h3>
          <p class="text-lg font-semibold mb-2">{card.price}</p>
          <div class="text-gray-600 mb-2">
            <ol>
              {#each card.productDetails as detail, index}
                <li>{index + 1}. {detail}</li>
              {/each}
            </ol>
          </div><hr>
          <div class="text-gray-600 mb-2">
            Any queries?
            <h1>Contact</h1>
            <ol>
              {#each card.contact as contact, index}
                <li>{index+1}. {contact}</li>
              {/each}
              </ol><br>
            <p>Judges are {card.judges}</p>
          </div>
          <a href="https://revibe-sgc.rf.gd/register" target="_blank">
            <button class="bg-black text-white px-4 py-2 rounded-md hover:bg-grey">
              Register Now
        </button></a>
        </div>
      </div>
    {/each}
  </div>
  
