// console.log('test')

// const choices = ['rock','paper','scissors']



// console.log(Math.floor(5.1))

// console.log(choices[Math.floor(Math.random()*3)])


// console.log()



/*-------------------------------- Constants --------------------------------*/

const choices = ['rock','paper','scissors']

/*-------------------------------- Variables --------------------------------*/

let playerChoice
let computerChoice
let message

/*------------------------ Cached Element References ------------------------*/


const choiceButtonElements = document.querySelectorAll('.choice-button')

const resultDisplayElement = document.querySelector('#result-display')

console.log(choiceButtonElements)


for (let oneElement of choiceButtonElements){

}


function getPlayerChoice(event){
        playerChoice = event.target.id

}

function getComputerChoice(){
        computerChoice = choices[Math.floor(Math.random()*3)]

}

function compareChoices(){
     if(playerChoice === computerChoice){
        message = 'You tied'
    }
    else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        message = 'You Lose'
    }
    else if(playerChoice === 'scissors' && computerChoice === 'rock'){
        message = 'You Lose'

    }

    else if(playerChoice === 'rock' && computerChoice === 'paper'){
        message = 'You Lose'
    }
    else{
       message = 'You Win'
    }
}

function handleClick(event){
    getPlayerChoice(event)
    getComputerChoice()
    compareChoices()
    resultDisplayElement.textContent = 'you picked ' + playerChoice + ' Computer picked ' + computerChoice + " " +message
}


choiceButtonElements.forEach(function(oneElement){
    console.log(oneElement)

    oneElement.addEventListener('click',handleClick)
})

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/