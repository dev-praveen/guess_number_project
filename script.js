'use strict'

let rndInt = Math.floor(Math.random() * 20) + 1
//document.querySelector('.number').textContent = rndInt

let scoreNumber = 20
let highScore = 0
document.querySelector('.again').addEventListener('click', function(){

    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.message').textContent = `Start guessing...`
    document.querySelector('.number').textContent='?'
    scoreNumber = 20
    rndInt = Math.floor(Math.random() * 20) + 1
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = scoreNumber
   
})

document.querySelector('.check').addEventListener('click', () => {

    const num = Number(document.querySelector('.guess').value)
    
    console.log(`input number ${num} and random number ${rndInt}`);

    if(!num){
        document.querySelector('.message').textContent = `Enter some number...`
    }
    
    else if(num === rndInt){
        document.querySelector('.message').textContent = `yeah!!! it's correct number...`
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent = rndInt

        if(scoreNumber > highScore){
            highScore = scoreNumber
            document.querySelector('.highscore').textContent = highScore
        }
    }
    else if(num > rndInt){

        if(scoreNumber > 1) {
            document.querySelector('.message').textContent = `Number is high...`
            scoreNumber--
            document.querySelector('.score').textContent = scoreNumber
        }
        else {
            document.querySelector('.message').textContent = `You've lost the game...`
            document.querySelector('.score').textContent = 0
        }
        
    }
    else if(num < rndInt){

        if(scoreNumber > 1) {
            document.querySelector('.message').textContent = `Number is low...`
            scoreNumber--
            document.querySelector('.score').textContent = scoreNumber
        }
        else {
            document.querySelector('.message').textContent = `You've lost the game...`
            document.querySelector('.score').textContent = 0
        }
    }
})
