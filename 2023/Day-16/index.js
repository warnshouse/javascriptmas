const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false
  },
  {
    name: "Del",
    hasBeenGood: true
  },
  {
    name: "Valerie",
    hasBeenGood: false
  },
  {
    name: "Astrid",
    hasBeenGood: true
  }
];

btn.addEventListener("click", function () { displaySorted(sorteesArr) });

function displaySorted(arr) {
  const doGooders = [];
  const miscreants = [];
  
  arr.forEach(person => {
    if (person.hasBeenGood) {
      doGooders.push(person.name);
    } else {
      miscreants.push(person.name);
    }
  });
  
  niceList.textContent = doGooders.join("\r\n");
  naughtyList.textContent = miscreants.join("\r\n");
}

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/