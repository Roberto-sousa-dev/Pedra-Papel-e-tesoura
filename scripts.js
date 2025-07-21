const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')




    let humanScorNumber = 0
    let machineScoreNumber = 0



 function zerarPontuacoes(){
    humanScorNumber = 0
     machineScoreNumber = 0
     humanScore.innerHTML = 0 
     machineScore.innerHTML= 0
     result.innerHTML = "pontuações zeradas!"
    
 }


const playHuma = (humachoice) => {
    playTheGame(humachoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human + 'Maquina: ' + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate"

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human ==='rock'  && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) { 
        humanScorNumber ++
        humanScore.innerHTML = humanScorNumber
        result.innerHTML = "Voce Ganhou!"
    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = " Voce Perdeu Para alexa!"
    }
}