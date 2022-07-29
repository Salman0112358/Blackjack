
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
//The maximum is exclusive and the minimum is inclusive


let cards = []; //array - ordered list of items
let sum =  0;
let hasBlacJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Sal",
    chips: "None"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    cardsEl.textContent = "Cards: "
    let firstCard = getRandomCard()
    let SecondCard = getRandomCard()
    cards = [firstCard,SecondCard];
    sum = firstCard + SecondCard
    isAlive = true;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if ( hasBlacJack === false && isAlive === true){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if( randomNumber > 10){
        return 10
    }else if ( randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

