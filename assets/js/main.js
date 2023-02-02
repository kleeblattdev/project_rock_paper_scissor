//Variables

// HTML Sections or text elements
const roundsSelection = document.querySelector("#roundsSelection");
const roundsCounter = document.querySelector("#roundsCounter");
const roundOf = document.querySelector("#roundOf");
const playerInput = document.querySelector("#playerInput");
const restart = document.querySelector("#restart");

//Rounds
const roundFive = document.querySelector("#roundFive");
const roundTen = document.querySelector("#roundTen");
const roundFifteen = document.querySelector("#roundFifteen");
const roundTwenty = document.querySelector("#roundTwenty");
//
let roundCounter = 0;

//Rock, Paper, Scissors buttons
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

//Output
const playerPoints = document.querySelector("#playerPoints");
let playerScore = 0;
const cpuPoints = document.querySelector("#cpuPoints");
let cpuScore = 0;
const resultText = document.querySelector("#resultText");
const finalResult = document.querySelector("#finalResult");

//reset Button
const btnReset = document.querySelector("#reset");

btnReset.addEventListener("click", () => {
    window.location.reload();
})

//functions

//Computer Random number generator

function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"];
    return options[Math.floor(Math.random() * options.length)]; 
}

// Rock button function
btnRock.addEventListener("click", (event) =>{
    const userInput = btnRock.value;
    const cpuInput = computerPlay();

    event.preventDefault();
    userRound(); // round counter 
    
    roundsSelection.style.display = "none";
    roundsCounter.style.display = "block";

    if (cpuInput === "Scissor"){
        playerScore++;
        playerPoints.innerHTML = playerScore.toString();
        resultText.innerHTML= `You chose ` + btnRock.value + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Paper"){
        cpuScore++;
        cpuPoints.innerHTML = cpuScore.toString();
        resultText.innerHTML=`You chose ` + btnRock.value + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }

})

// Paper button function 
btnPaper.addEventListener("click", (event) =>{
    const userInput = btnPaper.value;
    const cpuInput = computerPlay();

    event.preventDefault();

    if (cpuInput === "Rock"){
        console.log("win");
    } else if (cpuInput === "Scissor"){
        console.log('lose');
    } else {
        console.log("draw");
    }
})

//Scissor button function
btnScissor.addEventListener("click", (event) =>{
    const userInput = Number(btnScissor.value);
    const cpuInput = computerPlay();

    event.preventDefault();

    if (cpuInput === "Paper"){
        console.log("win");
    } else if (cpuInput === "Scissor"){
        console.log('lose');
    } else {
        console.log("draw");
    }
})

//Roundcounter function

const userRound = () => {
    roundCounter++;
    let counterOutput = roundCounter.toString();

    if (roundFive.checked && roundCounter <= 5){
        roundOf.innerHTML = `${counterOutput} /5`;
        return
    }else if(roundTen.checked && roundCounter <= 10){
        roundOf.innerHTML = `${counterOutput} /10`;
        return
    }else if(roundFifteen.checked && roundCounter <= 15){
        roundOf.innerHTML = `${counterOutput} /15`;
        return
    }else if(roundTwenty.checked && roundCounter <= 20){
        roundOf.innerHTML = `${counterOutput} /20`;
        return
    }
    else{
        overallScore();
        playerInput.style.display = 'none';
        restart.style.display = 'block';
    }
}

// overall Score function

const overallScore = () => {
    if (playerScore > cpuScore){
        console.log("You Win");
        finalResult.innerHTML = "YOU WIN!";
    }else if (playerScore < cpuScore){
        console.log("You lose");
        finalResult.innerHTML = "YOU LOSE!";
    }else{
        console.log('draw');
        finalResult.innerHTML = "IT'S A DRAW!";
}}
