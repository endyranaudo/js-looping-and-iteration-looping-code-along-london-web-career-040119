// Code your solutions in this file

// WRITING CARDS

function writeCards(names_arr, event) {
  let cards = []
  for (let i = 0; i < names_arr.length; i++ ) {
    cards.push(`Thank you, ${names_arr[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}



// COUNTDOWN
function countdown(countdown){
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  console.log(countdown);
}