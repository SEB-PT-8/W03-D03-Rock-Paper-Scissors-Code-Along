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

/*------------------------ Cached Element References ------------------------*/


const choiceButtonElements = document.querySelectorAll('.choice-button')

console.log(choiceButtonElements)


for (let oneElement of choiceButtonElements){

}

function handleClick(event){
    playerChoice = event.target.id

    computerChoice = choices[Math.floor(Math.random()*3)]

    console.log('player picked ' + playerChoice)
    console.log('computer picked ' + computerChoice)

}


choiceButtonElements.forEach(function(oneElement){
    console.log(oneElement)

    oneElement.addEventListener('click',handleClick)
})

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
