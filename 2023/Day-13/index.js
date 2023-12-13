/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const numGuests = document.getElementById('num-input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.onclick = function () {
  if (Number(numGuests.value) < 2) {
    result.textContent = "🙁";
  } else {
    if (document.getElementById('vegetarian-input').checked) {
      result.textContent = "Nuts and berries";
    } else {
      result.textContent = (Number(numGuests.value) < 5)
        ? "Ham" : "Turkey";
    }
  }
};
