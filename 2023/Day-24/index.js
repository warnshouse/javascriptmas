/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/

const redLights = document.getElementsByClassName('red');
const blueLights = document.getElementsByClassName('blue');

setInterval(() => {
  const redFilter = window.getComputedStyle(redLights[0]).getPropertyValue("filter");
  
  if (redFilter === "brightness(1)") {
    for (let i = 0; i < redLights.length; i++) {
      redLights[i].style.filter = "brightness(.8)";
      blueLights[i].style.filter = "brightness(1)";
    }
  } else {
    for (let j = 0; j < redLights.length; j++) {
      redLights[j].style.filter = "brightness(1)";
      blueLights[j].style.filter = "brightness(.8)";
    }
  }
}, 800);