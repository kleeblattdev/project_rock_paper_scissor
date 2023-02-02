//Variables

// HTML Sections or text elements
const roundsSelection = document.querySelector("#roundsSelection");
const roundsCounter = document.querySelector("#roundsCounter");
const roundOf = document.querySelector("#roundOf");

//Rounds
const roundFive = document.querySelector("#roundFive");
const roundTen = document.querySelector("#roundTen");
const roundFifteen = document.querySelector("#roundFifteen");
const roundTwenty = document.querySelector("#roundTwenty");

//Rock, Paper, Scissors buttons
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

//Output
const playerPoints = document.querySelector("#playerPoints");
const cpuPoints = document.querySelector("#cpuPoints");
const resultText = document.querySelector("#resultText");

//functions

//Computer Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const cpuInput = getRandomInt(3);
console.log(cpuInput);
  // Expected output: 0, 1 or 2


// Rock button function
btnRock.addEventListener("click", (event) =>{
    const userInput = Number(btnRock.value);
    const cpuInput = getRandomInt(3);

    event.preventDefault();
    
    roundsSelection.style.display = "none";
    roundsCounter.style.display = "block";

    if (cpuInput === 2){
        console.log("win");
    } else if (cpuInput=== 1){
        console.log('lose');
    } else {
        console.log("draw");
    }

})

// Paper button function 
btnPaper.addEventListener("click", (event) =>{
    const userInput = Number(btnPaper.value);
    const cpuInput = getRandomInt(3);

    event.preventDefault();

    if (cpuInput === 0){
        console.log("win");
    } else if (cpuInput=== 2){
        console.log('lose');
    } else {
        console.log("draw");
    }
})

//Scissor button function
btnScissor.addEventListener("click", (event) =>{
    const userInput = Number(btnScissor.value);
    const cpuInput = getRandomInt(3);

    event.preventDefault();

    if (cpuInput === 1){
        console.log("win");
    } else if (cpuInput=== 0){
        console.log('lose');
    } else {
        console.log("draw");
    }
})