const elf = document.getElementById("elf");
const btn = document.getElementById("btn");

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  
  if (elf.innerText.length < 200) {
    elf.innerText = elf.innerText + "🧝";
  } else {
    btn.disabled = true;
  }
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/