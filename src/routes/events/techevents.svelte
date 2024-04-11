
<script>
    const cards = [
      {
        id: 1,
        productName: 'Paper Presentation',
        productDetails: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        price: 'Rs. 100 /Head',
        imageURL: 'https://via.placeholder.com/150', // Sample image URL
      },
      {
        id: 2,
        productName: 'Coding & Debugging',
        productDetails: [
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        price: 'Rs. 50 /Head',
        imageURL: 'https://via.placeholder.com/150', // Sample image URL
      },
      {
        id: 3,
        productName: 'Technical Quiz',
        productDetails: [
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        price: 'Rs. 50 /Head',
        imageURL: 'https://via.placeholder.com/150', // Sample image URL
      },
      {
        id: 4,
        productName: 'Web Designing',
        productDetails: [
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        price: 'Rs. 50 /Head',
        imageURL: 'https://via.placeholder.com/150' // Sample image URL
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
          <ol class="text-gray-600 mb-2">
            {#each card.productDetails as detail}
              <li>{detail}</li>
            {/each}
          </ol>
          <p class="text-lg font-semibold mb-2">{card.price}</p>
          <button class="bg-black text-white px-4 py-2 rounded-md hover:bg-grey">
            Buy Now
          </button>
        </div>
      </div>
    {/each}
  </div>
  
