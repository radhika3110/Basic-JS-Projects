let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#Computer-score");


const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("User Wins");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        CompScorePara.innerText = compScore;
        console.log("Computer Wins");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    console.log("Game was Draw.")
    msg.innerText = "The Game was draw, play again!";
    msg.style.backgroundColor = "brown";
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ", userChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});