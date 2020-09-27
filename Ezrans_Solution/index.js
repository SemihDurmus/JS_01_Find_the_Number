/*
1. Keep a random  number 👍
2. Get a numbre from user 👍
3.Check the number
  a. If the number is bigger than the random nr "it's high" 
  b. If the number is smaller than the random nr "it's low" 
  c. If they are equal, finish the game */

let random_number = Math.floor(Math.random()*100 +1);
let guess_count = 0;

console.log(random_number);

document.querySelector("#check_it")
    .addEventListener("click", checkNumber);


document.querySelector("#nr_game").addEventListener("keyup", function(event){
    if (event.keyCode === 13)
        checkNumber();
})

document.querySelector("#nr_game").focus();

function checkNumber() {

    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");
    
    if (userInputElement.value == random_number) {
        alert(`You win on your ${guess_count}. try.`);
        
        const choice = confirm("Play again?");
        console.log(choice);
        
        if (choice) {
            guess_count = 0;
            random_number = Math.floor(Math.random()*100 +1);
            answerLabelElement.innerText = "";
        } else {
            alert("Thanks for playing.");
            answerLabelElement.innerText = `Best guess count is ${guess_count}`;
            guessLabelElement.innerText = "";
        }

    } else if (userInputElement.value == "") {
        answerLabelElement.innerText = `Enter a number.`;
    } else if (isNaN(userInputElement.value)) {
        answerLabelElement.innerText = `Not a number.`;
    } else if (userInputElement.value > random_number) {
        guess_count++;
        guessLabelElement.innerText = `It is your ${guess_count} try.` 
        answerLabelElement.innerText = `You should go down.`;
    } else if (userInputElement.value < random_number) {
        guess_count++;  
        guessLabelElement.innerText = `it is your ${guess_count} try.` 
        answerLabelElement.innerText = `You should go up.`; 
    }
    userInputElement.focus();
    userInputElement.value = "";    
}