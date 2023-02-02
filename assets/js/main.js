//Variables

// HTML Sections or text elements
const roundsSelection = document.querySelector("#roundsSelection");
const roundsCounter = document.querySelector("#roundsCounter");
const roundOf = document.querySelector("#roundOf");
const playerInput = document.querySelector("#playerInput");
const restartSection = document.querySelector("#restartSection");

//Rounds
const roundFive = document.querySelector("#roundFive");
const roundTen = document.querySelector("#roundTen");
const roundFifteen = document.querySelector("#roundFifteen");
const roundTwenty = document.querySelector("#roundTwenty");
//
let roundCounter = 0;
let maxRoundCounter = 0;

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
const btnRestart = document.querySelector("#restart");

btnRestart.addEventListener("click", () => {
    window.location.reload();
})

//functions

//Computer Random number generator

function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"];
    return options[Math.floor(Math.random() * options.length)]; 
}

//Set max round

const maxRound = () =>{
    if (roundFive.checked){
        maxRoundCounter = 5;
        return
    }else if(roundTen.checked){
        maxRoundCounter = 10;
        return
    }else if(roundFifteen.checked){
        maxRoundCounter = 15;
        return
    }else if(roundTwenty.checked){
        maxRoundCounter = 20;
        return
    }else{
    }
}

//Roundcounter function

const userRound = () => {
    roundCounter++;
    let counterOutput = roundCounter.toString();
    roundOf.innerHTML = `${counterOutput} / ${maxRoundCounter.toString()}`;

    if (roundCounter === maxRoundCounter) {
        overallScore();
        playerInput.style.display = 'none';
        restartSection.style.display = 'flex';
    } else{}
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

// Rock button function
btnRock.addEventListener("click", (event) =>{
    let userInput = btnRock.value;
    const cpuInput = computerPlay();

    event.preventDefault();
    maxRound();
    if (maxRoundCounter === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter 
    
    roundsSelection.style.display = "none";
    roundsCounter.style.display = "block";

    if (cpuInput === "Scissor"){
        playerScore++;
        playerPoints.innerHTML = playerScore.toString();
        resultText.innerHTML= `You chose ` + userInput + ` and the Computer chose ` + cpuInput +`. You WIN!`;
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
    maxRound();
    if (maxRoundCounter === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter 
    
    roundsSelection.style.display = "none";
    roundsCounter.style.display = "block";

    if (cpuInput === "Rock"){
        playerScore++;
        playerPoints.innerHTML = playerScore.toString();
        resultText.innerHTML= `You chose ` + btnPaper.value + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Scissor"){
        cpuScore++;
        cpuPoints.innerHTML = cpuScore.toString();
        resultText.innerHTML=`You chose ` + btnPaper.value + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }
})

//Scissor button function
btnScissor.addEventListener("click", (event) =>{
    const userInput = btnScissor.value;
    const cpuInput = computerPlay();

    event.preventDefault();
    maxRound();
    if (maxRoundCounter === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter 
    
    roundsSelection.style.display = "none";
    roundsCounter.style.display = "block";

    if (cpuInput === "Paper"){
        playerScore++;
        playerPoints.innerHTML = playerScore.toString();
        resultText.innerHTML= `You chose ` + btnScissor.value + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Rock"){
        cpuScore++;
        cpuPoints.innerHTML = cpuScore.toString();
        resultText.innerHTML=`You chose ` + btnScissor.value + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }
})
