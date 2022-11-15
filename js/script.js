"use strict";


document.addEventListener('DOMContentLoaded', () => {


   const deadline = '2022-11-26';

   function calcRemainingTime(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());

      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor(t / (1000 * 60 * 60) % 24);
      const minutes = Math.floor(t / (1000 * 60) % 60);
      const seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         days,
         hours,
         minutes,
         seconds,
      };
   }

   function zeroNum(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endtime) {
      const timer = document.querySelector(selector);
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');
      const timeInteval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = calcRemainingTime(endtime);

         days.textContent = zeroNum(t.days);
         hours.textContent = zeroNum(t.hours);
         minutes.textContent = zeroNum(t.minutes);
         seconds.textContent = zeroNum(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInteval);
         }
      }
   }

   setClock('.timer', deadline);


});


