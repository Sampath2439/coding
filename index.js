let player = {
 name:"sampath",
 cashearned:2000
}
let cards = [0] //cards array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageel = document.getElementById("message-el")

let sumel = document.getElementById("sum-el")

let cardel = document.getElementById("cards-el")

let playerel = document.getElementById("player-el")

playerel.textContent = player.name+ " : rupees "+player.cashearned
//insted of using the ""getElementById"" we can also use the ""queryselector""

function getrandomcard(){
 let randomnumber = Math.floor(Math.random()*13) +1

 if(randomnumber > 10)
  return 10
 else if(randomnumber == 1)
  return 11
 else
  return randomnumber  
}

function startgame(){
 isAlive = true

 let firstcard = getrandomcard()
 let secondcard = getrandomcard()
 cards = [firstcard,secondcard]
 sum = firstcard + secondcard
 rendergame()
}

function rendergame(){
 cardel.textContent = "Cards: "

 for(let i=0; i<cards.length; i++)
 {
  cardel.textContent += cards[i]+" "
 }
 sumel.textContent = "Sum: "+sum

 if(sum < 21){
  //console.log("do you want to draw a new card")
  message="do you want to draw a new card"
 }
 else if(sum == 21){
  //console.log("you havr got black jack")
  message = "you have got black jack"
  hasBlackJack = true
  
 }
 else{
  //console.log("your out of the game")
  message = "your out of the game"
  isAlive = false 
 }
 
 messageel.textContent = message
}

function newcard(){

 if(isAlive == true && hasBlackJack == false){
  ("you have got black jack")
  let card  = getrandomcard()
  sum += card
  cards.push(card)
  console.log(cards)
  rendergame()
 }
 
}

