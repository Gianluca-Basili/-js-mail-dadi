let giocatore = Math.round(Math.random()*6)
let computer = Math.round(Math.random()*6)
console.log(giocatore)
console.log(computer)

if(giocatore>computer){
    console.log('complimenti giocatore hai vinto')
}
else {
    console.log('mi dispiace giocatore hai perso')
}
