<!-- EventCards.svelte -->
<script lang="ts">
  const cards = [
    {
      pid: 'Gully Cricket',
      id: 1,
      productName: 'Gully Cricket',
      productDetails: ["The event will be held at the Basketball Ground with a starting time of 9:30 am. Registration fees for teams are set at 200/-. ", "Each team must consist of 6 members.", "The match format is a 3-over game.", "Wickets can be taken either by one pitch one hand or through a bowled delivery.", "Only straight hits resulting in sixes and fours will be counted; hits on other sides are considered out.", "The game will utilize a Stumper Ball.", "Teams are required to bring their own bats.", "The decision of the umpire is deemed final.", "Only medium-fast and spin bowling styles are permitted.", "Punctuality is highly encouraged."],
      price: 'Rs. 200 /Team',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712930021/gully_cricket_5_msxtcb.jpg', // Sample image URL
      contact:["Vallarasu : 7397174414", "Jayasurya : 9344147861", "Mohammed Melhan : 9600159063"],
      judges:"Vallarasu, Jaya Surya & Mohammed Melhan"
    },
    {
      pid: 'Chess',
      id: 2,
      productName: 'Chess',
      productDetails: ["The event will take place from 11:00 am to 12:30 noon (UTC +5:30) at the Mechanical block.", "No Team Participation Allowed & The competition will follow a knockout format.", "Matches will be conducted with a blitz time control of 10 minutes per player for the entire game, without any increment.", "In case of a tie, players will compete again with a time control of 3 minutes per player for the entire game.", " Chess boards and pieces will be provided by the organizers, and participants must use the provided equipment for all matches.", "Pairings for each round will be announced before the tournament begins, and players must be at their designated boards promptly at the scheduled start time.", "Players are responsible for arriving on time, as failure to do so may lead to disqualification.", "Any disputes or concerns regarding matches can be appealed to the tournament director, whose decision will be final.", "Fair play and sportsmanship are expected from all participants, and any form of cheating, including receiving outside assistance or using electronic devices, will result in immediate disqualification."],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1712930818/chess_qvmc8x.jpg', // Sample image URL
      contact:["Ajay - 9361069627", " Ayaaz - 99439 46886"],
      judges:"Ajay, Ayaaz"
    },
    {
      pid: 'BGMI & Free Fire',
      id: 3,
      productName: 'Free Fire',
      productDetails: ["CHARACTER SKILLS ,GUN PROPERTY AND LOADOUT WILL BE DIASABLED FOR BOTH THE ROUNDS!!!", "Duo's and Trio's are allowed to participate as a team.", "Bring your own things like earphones & gaming sleeves & wifi or hotspot won't be provided.", "Emoting against opponents and to your own teamates is prohibited.", "Participants shouldn't use 'Hacks' or 'config files',if found using any the whole team will be disqualified.", "PC's & Tabs aren't allowed to play and players participating should play the game in the specified area allotted,playing from home or from other places will be subjected to disqualification.", "Rules for Round 1 (Full Map/BR):", "Reviving through vending machines or revival points is not allowed. Teaming up with opponents is strictly prohibited; any such actions will result in disqualification for both teams. Matches will be conducted in 'BERMUDA' only. 'Camping' or engaging in 'Heal battles' is prohibited; winning a match by these means will not be considered. The top 4 teams will be selected for Round 2 based on entries.", "Rules for Round 2 (Clash Squad):", "It's up to the 'TRIO'S AND DUO'S' if they've made it this far. Blocking opponents from reaching the safe zone intentionally will result in disqualification. Unlimited loot option will be enabled for this round. Climbing rooftops is prohibited. Breaking opponents' round walls is prohibited. Capturing the center zone using Gloo-walls is prohibited. Usage of grenades is strictly prohibited. A maximum amount of CS coin will be provided at the start of every round. Airdrop and cyber airdrop will be disabled."],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1713345144/ff_wtkpnr.jpg', // Sample image URL
      contact:["Delhi Ganesh: 6382093124", "Harish – 8098994170"],
      judges:" Delhi Ganesh, Harish, Abishek, Mohammed Aasif and Mohammed Nafeed"
    },
    {
      id: 4,
      productName: 'BGMI',
      productDetails: ["Squad: Minimum 1 and Maximum 4 participants are allowed to form a team. The event will take place from 01:30 pm to 03:00 pm in the Auditorium.", "Participants can participate solo, duo, trio, or in a squad.", "Participants are not allowed to team up with enemy teams. Each player or team must play independently.", "Participants must not use any hacks. If found, the team will be disqualified.", "Matches will be conducted on the Erangel Map (Battle Royale).", " Respect towards teammates and opponents is mandatory, and the use of disrespectful or abusive language is not allowed.", "Participants will earn 5 points for each kill achieved. In squad matches, a chicken dinner (winning the match) will award 15 points to the victorious squad, while the runner-up squad will receive 10 points."],
      price: 'Rs. 50 /Head',
      imageURL: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1713345144/bgmi_juqhoi.jpg', // Sample image URL
      contact:["Delhi Ganesh: 6382093124", "Abdul Bari: 9597225564", "Gnanasekaran: 9080181973"],
      judges:"Delhi Ganesh, Abdul Bari"
    }
    // Add more cards as needed
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each cards as card}
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img class="w-full h-48 object-cover" src={card.imageURL} alt={card.productName} />
      <div class="p-4" id="{card.pid}">
        <h3 class="text-lg font-semibold mb-2">{card.productName}</h3>
        <p class="text-lg font-semibold mb-2">{card.price}</p>
        <div class="text-gray-600 mb-2">
          <ol>
            {#each card.productDetails as detail, index}
              <li>{index + 1}. {detail}</li>
            {/each}
          </ol><br><hr>
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
        </div>
        <a href="https://revibe-sgc.rf.gd/register" target="_blank">
          <button class="bg-black text-white px-4 py-2 rounded-md hover:bg-grey">
            Register Now
          </button>
        </a>
      </div>
    </div>
  {/each}
</div>
