const wishlist = [
  "Macbook Air M2",
  // TODO: Add more items here
  "2TB External Hard Drive",
  "RetroCrush Annual Subscription",
  "Belgian Waffles"
];

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

const wishlistDiv = document.getElementsByClassName('wishlist')[0];

wishlist.forEach(item => {
  const para = document.createElement('p');
  const wishlistItem = document.createTextNode(item);
  para.appendChild(wishlistItem);
  wishlistDiv.appendChild(para);
});