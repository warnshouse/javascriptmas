const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  // Your code here
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  const assignment = {};
  
  for (let k = 0; k < arr.length; k++) {
    assignment[arr[k]] = arr[k + 1] || arr[0];
  }
  
  return assignment;
}

/*
Example output:
{
  Alice: "Dan",
  Bob: "Ferdinand",
  Carly: "Ed",
  Dan: "Alice",
  Ed: "Ginny",
  Ferdinand: "Bob",
  Ginny: "Carly"
}
*/

// Stretch goal
function createTextListOfPairs(arr) {
  const pairsObj = generateSecretSantaPairs(arr);
  const textList = Object.entries(pairsObj).map(pair => {
    return `${pair[0]}: ${pair[1]}`
  }).sort().join('\n');
  
  document.getElementById('paragraph').innerText = textList;
}

document.getElementById('button').onclick = function () {
  createTextListOfPairs(people);
};