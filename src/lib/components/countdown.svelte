<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
      var endMessageDiv = document.getElementById('endMessage');
    
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
          clock.style.display = 'none';
          endMessageDiv.style.display = 'block';
        } else {
          daysSpan.innerHTML = ('0' + t.days).slice(-2);
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        }
      }
    
      updateClock(); 
      var timeinterval = setInterval(updateClock, 1000);
    }
    
    var deadline = 'April 27 2024 09:59:59';
    initializeClock('clockdiv', deadline);
    });
</script>

<div id="clockdiv" class="flex space-x-6 text-center">
  <div class="bg-black p-3 rounded-lg text-white shadow-sm">
    <span class="days text-3xl"></span>
    <div>Days</div>
  </div>
  <div class="bg-black p-3 rounded-lg text-white shadow-sm">
    <span class="hours text-3xl"></span>
    <div>Hours</div>
  </div>
  <div class="bg-black p-3 rounded-lg text-white shadow-sm">
    <span class="minutes text-3xl"></span>
    <div>Minutes</div>
  </div>
  <div class="bg-black p-3 rounded-lg text-white shadow-sm">
    <span class="seconds text-3xl"></span>
    <div>Seconds</div>
  </div>
</div>

<div id="endMessage" class="text-center text-3xl font-bold mt-4" style="display: none;">
  See You in 2025
</div>
