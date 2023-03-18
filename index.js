let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let saveRes = document.getElementById("save-res")

let countH = 0
let countG = 0

function onePointH() {
 countH += 1
 homeScore.textContent = countH

}
function twoPointH() {
 countH += 2
 homeScore.textContent = countH

}
function threePointH() {
 countH += 3
 homeScore.textContent = countH
  
}

function onePointG() {
 countG += 1
 guestScore.textContent = countG

}
function twoPointG() {
 countG += 2
 guestScore.textContent = countG
  
}
function threePointG() {
 countG += 3
 guestScore.textContent = countG
 
}

function newGame() {
   let countRes = " " + countH + "-" + countG + ";"
   saveRes.textContent += countRes
  
   countH = 0
   countG = 0
   homeScore.textContent = countH
   guestScore.textContent = countG 
   
}
