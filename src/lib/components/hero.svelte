<script lang="ts">
    import Button from '$lib/button/Button.svelte';
    import Icon from '$lib/icon/Icon.svelte';
    import Countdown from '$lib/components/countdown.svelte';
    import Modal from '$lib/modal/Model.svelte';
    import { openModal } from 'svelte-modals';
  
    function handleClick() {
      window.open('/register')
    }
  </script>
  
  <section
    id="hero"
    class="flex w-full flex-col items-center justify-start space-y-8 px-24 transition-all  duration-500 ease-in-out"
  >
    <div
      id="hero-content-group"
      class="flex flex-col items-center justify-start space-y-8"
    >
      <div class="bg-text-container max-w-7xl">
        <div class="animate-text">
          <span>Revibe24</span>
          <span>Revibe24</span>
        </div>
        <div class="animate-text left">
          <span>Revibe24</span>
          <span>Revibe24</span>
        </div>
      </div>
  
    <div class="italic">
        <img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1712737224/Revibelogo_1_fdaxqg.png" width="auto" height="auto">
    </div>
      <p class="max-w-2xl text-start text-gray-700 md:text-center lg:text-center">
        Come learn, enjoy, network and expose your talends and expertise to our Society.  Let Bang On to Revibe 2024
      </p>
    </div>
  
    <div
      id="hero-cta-group"
      class="flex w-full max-w-2xl flex-col items-center justify-start space-y-4 md:flex-row md:space-x-4 md:space-y-0 lg:flex-row"
    >
      <Button
        id="button-hero-get-tickets"
        title="Book tickets"
        onClick={() => handleClick()}
      >
        <Icon width="20" height="20" name="ticket" />
      </Button>
  
      <Button
        id="button-hero-add-to-calendar"
        isSecondaryButton={true}
        title="Add to calendar"
        onClick={() =>
          window.open(
            'https://calendar.app.google/UHZG4LfWGBvZbm2V8'
          )}
      >
        <i class="fa fa-calendar" />
      </Button>
    </div>
  
    <div
      class="flex w-full flex-col items-center justify-center space-y-3 text-xl sm:flex-row sm:space-y-0 sm:space-x-6"
    >
      <div class="flex items-center space-x-2">
        <i class="fa fa-calendar" />
        <p>April 27 2024</p>
        <i class="fa fa-location-arrow" />
        <a href='https://maps.app.goo.gl/KnoovD6vyYEHWnDr8'
          ><p>C Abdul Hakeem College of Engineering & Technology, Ranipet</p></a>
      </div>
    </div>
  
    <div class="items-center">
      <Countdown />
    </div>
  </section>
  
  <style>
    #hero {
      transform: skewY(-5deg);
    }
  
    .bg-text-container {
      transform: translateX(-50%);
      left: 50%;
      position: absolute;
      z-index: -999;
    }
  
    span {
      font-size: 280px;
      color: transparent;
      -webkit-text-stroke: 4px #c44eac;
      text-transform: uppercase;
      display: inline-block;
      line-height: 0.75;
      min-width: auto;
      font-weight: 200;
      opacity: 0.1;
    }
  
    @keyframes text-scrolling {
      0% {
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        transform: translate3d(0%, 0, 0);
      }
    }
    .animate-text {
      animation: text-scrolling 20s linear infinite;
      will-change: transform;
      display: block;
      position: relative;
      white-space: nowrap;
    }
    .animate-text.left {
      animation-direction: reverse;
    }
  </style>