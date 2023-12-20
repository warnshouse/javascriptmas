const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"]
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"]
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"]
    ]
  ]
];

function saveSanta(arr) {
  let i = 0;
  
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr[i] = saveSanta(arr[i]);
      i++;
    } else {
      if (arr[i] !== "🎅") {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  
  return arr;
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray));