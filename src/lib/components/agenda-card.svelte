<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Agenda } from '$lib/type';

  export let agenda: Agenda[];

  function redirectToRegister() {
    window.location.href = '/events#{item.title}';
  }

  // Define a function to determine the background color based on category
  function getCategoryColor(category: string) {
    return category === 'tech' ? 'bg-tech' : (category === 'non-tech' ? 'bg-nontech' : 'bg-other');
  }

  // Define a function to determine if the "Get Your Tickets" button should be visible
  function showTicketsButton(category: string) {
    return category === 'tech' || category === 'non-tech' || category === 'games';
  }

  const dispatcher = createEventDispatcher();
</script>

<div class="py-1">
  <div class="grid grid-rows md:grid-cols-2 ds:grid-cols-3 md:gap-5 gap-5">
    {#each agenda as item}
      <div class="relative bg-black md:w-[350px] mm:w-[310px] ml:w-[350px] w-[300px] h-[260px] text-white rounded-3xl p-7"
           style="background-image: {item.image ? `url(${item.image})` : 'none'}">
        <div class="flex justify-between gap-6">
          <div class="title text-xl font-display font-semibold">{item.title}</div>
          <div class="{getCategoryColor(item.category)} category text-[10px] flex flex-col justify-center text-center font-display font-medium rounded-full w-[70px] h-[30px]">
            {item.category}
          </div>
        </div>
        <div class="time py-5 font-display font-medium">{item.time}</div>
        <div class="venue py-1 font-display font-medium">{item.venue}</div>
        <div class="absolute bottom-0 mb-8"> <!-- Adjust margin-bottom here -->
          {#if showTicketsButton(item.category)}
            <button class="action-button bg-white text-black px-4 py-2 rounded-md" on:click={redirectToRegister}>About the Event</button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
