'use strict'

document.querySelector('.check').addEventListener('click', () => {

    const num = Number(document.querySelector('.guess').value)
    const rndInt = Math.floor(Math.random() * 20) + 1

    console.log(`input number ${num} and random number ${rndInt}`);

    
    if(num === rndInt){
        document.querySelector('.message').textContent = `yeah!!! it's correct number...`
    }
    else{
        document.querySelector('.message').textContent = `keep guessing ...`
    }
})
