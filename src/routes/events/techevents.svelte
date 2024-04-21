<script>
  const cards = [
    {
      id: 1,
      productName: 'Paper Presentation',
      productDetails: [
    "Topic: Open Topic",
    "Each participant must pay a registration fee of Rs 100.",
    "Event timing is from 10:30 AM to 3:30 PM at Technology Tower.",
    "Teams can have a minimum of 1 and a maximum of 3 participants.",
    "Keep presentations within 5-6 minutes.",
    "Avoid excessive animations in presentations.",
    "Limit each slide to seven lines of text or bullet points.",
    "Submit your PowerPoint presentation to sgcrevibeppt@gmail.com with your name and college by April 27, 2024.",
    "Food will be provided for participants."
],
      price: 'Rs. 100 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712931675/pptw_tytajs.jpg',
      contact:["Rafique: 9843988538", "Zayd Bilal : 7780527860", "Jaheen: 8148809436"],
      judges:"**Updated soon"
    },
    {
      id: 2,
      productName: 'Coding & Debugging',
      productDetails: ["The registration fee for participation in the event is structured as follows: 50/- for one person and 100/- for two persons(only two participants allowed as team).",  "The event is scheduled from 10:30 am to 12:30 pm at the Technology Tower.", "The competition comprises two rounds.", "In Round 1, participants will receive a link to a Google Forms document containing debugging questions, which they must attempt to solve within the allocated time.", "Round 2 involves participants being given a set of questions for which they must design code. Their code must produce the sample output provided and handle other complex inputs specified by the coordinators.", "Participants must complete both rounds within the given time frame, and it is advisable to bring a pen for rough work during the competition."],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712927668/result_qa6pw1.jpg', // Sample image URL
      contact:["Varun: 6383036342", "Dhanush: 6381273532", "Mudassir : 8072124967"],
      judges:"Varun, Dhanush & Mudassir"
    },
    {
      id: 3,
      productName: 'Technical Quiz',
      productDetails: ["Only individual participants are allowed and participants will be given 15 mins to complete each round.",
"For each correct answer, participants will receive +5 marks. Incorrect answers and unanswered questions will result in a deduction of -5 marks.",
"Participants will enter the next rounds based on their performance and marks.",
"In the event of a tie among the participants regarding the score, the Tiebreaker Round will be conducted to resolve it.",
"The judge’s decision will be final and irrevocable. Arguments over their decision will not be entertained and may result in the disqualification of that particular team.",
"If anyone found to be cheating, they will be disqualified."
]
,
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712930991/quiz_1_muhgzs.jpg', // Sample image URL
      contact:["Abubakkar Siddiq N: +919842028191", "Abishek: +919842028191"],
      judges:" Yumnah Safiya, Abubakkar Siddiq, Abishek and Abdul Gafoor Asjad"
    },
    {
      id: 4,
      productName: 'Web Designing',
      productDetails: [
    "Event Timing: 11 AM - 12.30 PM @EEE Seminar Hall",
    "Participants can participate either individually or as a team.",
    "Each team can contain up to 2 members maximum.",
    "Participants must bring their personal computer.",
    "Participants are strictly prohibited from copying codes from GitHub, Stack Overflow, CodePen, ChatGPT, and other sources. Any team found violating this rule will be disqualified from the competition.",
    "Participants are not allowed to use their mobile phones during the event, except for emergencies.",
    "Participants may use their mobile phones for internet connectivity only during the competition if necessary.",
    "Participants must create and design the websites themselves without the help of others. Although collaboration between team members is allowed, each individual should contribute to the project equally.",
    "Participants must ensure that their website is appropriate and respectful. Any offensive or inappropriate content will not be tolerated and may result in disqualification.",
    "Participants are allowed to use Bootstrap and Google Fonts. Other sources should not be used. Such practices are prohibited.",
    "Participants must respect the judges and their decisions. Their decision is final and cannot be opposed.",
    "Participants must submit their project design on time, as failure to do so may result in disqualification from the contest."
],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712825994/website-design-content-layout-graphic_kxk6fk.jpg', // Sample image URL
      contact:["Sathakatullah: +91 6385356926", "Abdul Bari: +91 9597225564"],
      judges:"Sneha, Sathakatullah, Syed Naveeth, Abdul Bari & Kashif ul Haq"
    }
    // Add more cards as needed
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each cards as card}
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img class="w-full h-48 object-cover" src={card.imageURL} alt={card.productName} />
      <div class="p-4" id="{card.productName}">
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
