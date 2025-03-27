let comptScore = 0;
let userScore = 0;

const chc = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg1");

const userScoreP = document.querySelector("#user-score");
const comptScoreP = document.querySelector("#compt-score");

const compChc = () => {
    const option = ["rock", "paper", "scissor"];
    const rndmIndx = Math.floor(Math.random() * 3);
    return option[rndmIndx];
};

const gameDraw = () => {
    msg.innerText = "Game was draw, Play again."
};

const showWnnr = (usrWin, userChc, comChc) => {
    if (usrWin) {
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You Win , your ${userChc} beats ${comChc}`;
        msg.style.backgroundColor = "green";
    } else {
        comptScore++;
        comptScoreP.innerText = comptScore;
        msg.innerText = `You lost , ${comChc} beats your ${userChc}`;
        msg.style.backgroundColor = "red";
    }
};

const gameplay = (userChc) => {
    console.log("user choice = ", userChc);
    const comChc = compChc();
    console.log("computer choice =", comChc);

    if (userChc === comChc) {
        gameDraw();
    } else {
        let usrWin = true;
        if (userChc === "rock") {
            usrWin = comChc === "paper" ? false : true;
        } else if (userChc === "paper") {
            usrWin = comChc === "scissor" ? false : true;
        } else {
            usrWin = comChc === "rock" ? false : true;
        }
        showWnnr(usrWin, userChc, comChc);
    }
};

chc.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChc = choices.getAttribute("id");
        gameplay(userChc);
    });
});

