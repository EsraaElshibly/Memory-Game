/* Start define variables */
let cards = document.querySelectorAll('.memory-card'),

    toggleCard = false,

    firstCard,

    secondCard;
/* End To define variables */

// Add event when anyone click on photo
cards.forEach(card => card.addEventListener('click', clickCard))

// the function on the photo
function clickCard() {

    this.classList.toggle('toggle')  //add the class and style it by uding css

    // what happen on first click (Opening firstcard)
    if (!toggleCard){
        toggleCard = true ;
        firstCard = this

    // what happen on second click (Opening secondcard)
    } else {
        toggleCard = false ;
        secondCard = this

    // what happened when the two cards match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener('click', clickCard); // this action stop the card rotate
    secondCard.removeEventListener('click', clickCard) // this action stop the card rotate
    
    } else {  // what happened when the two cards not match
        setTimeout( () => {  // making time to close the cards which not matching
            firstCard.classList.remove('toggle');  
            secondCard.classList.remove('toggle');
        }, 1200 );
    }
    
} 
}
