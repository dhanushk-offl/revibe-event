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
      judges:"Yamnah Safiya, Abubakkar Siddiq, Abishek & Asjad"
    },
    {
      id: 4,
      productName: 'Web Designing',
      productDetails: [
        "Entry fee: ₹50/- per person",
        "Timing: 11:00 am to 12:00 Noon (UTC +5:30)",
        "Venue: Auditorium",
        "Team Size: 1 to 3 members per team",
        "Bring your own portable personal computer.",
        "No copying from GitHub, Stack Overflow, etc.",
        "Use only HTML, CSS, and JavaScript.",
        "No mobile phone use, except for emergencies.",
        "Internet access allowed for competition purposes only.",
        "Submit project design on time.",
        "Work on the website independently with equal team contribution.",
        "Maintain appropriate and respectful content.",
        "Use Creative Commons pictures only.",
        "Use pre-processed HTML data provided by coordinators for new HTML file development.",
        "Respect judges' decisions."
      ],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712825994/website-design-content-layout-graphic_kxk6fk.jpg', // Sample image URL
      contact:["Sathakatullah: +91 6385356926", "Abdul Bari: +91 9597225564"],
      judges:"Sathakatullah, Kamali and Abdul Bari"
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
