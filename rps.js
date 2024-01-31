let user_Score = 0;
let comp_score = 0;

var choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#mesg")
var msg2 = document.querySelector(".msg")
var score_y = document.querySelector("#y");
var score_c = document.querySelector("#c");
var restart = document.querySelector(".restart");

var Randcomputer = () => {
    var arr = ["ROCK", "PAPER", "SCISSOR"]
    const idx = Math.floor(Math.random() * 3);
    return arr[idx];
}

var draw = () => {
    msg.innerText = "Game - Draw"
    msg2.style.backgroundColor = "white"
}

var Gameplay = (userid) => {
    const comp_id = Randcomputer();
    console.log("computer chooses => " + comp_id)
    console.log("user chooses => " + userid.toUpperCase())

    if (comp_id == userid) {
        draw();
    }
    else {
        var userWIn = true;
        if (userid === "ROCK") {
            userWIn = comp_id === "PAPER" ? false : true;
            showWinner(userWIn, userid, comp_id);
        }
        else if (userid === "PAPER") {
            userWIn = comp_id === "SCISSOR" ? false : true;
            showWinner(userWIn, userid, comp_id);
        }
        else {
            userWIn = comp_id === "ROCK" ? false : true;
            showWinner(userWIn, userid, comp_id);
        }
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        var userid = choice.getAttribute("id").toUpperCase()
        Gameplay(userid);
    })
})

var showWinner = (userWIn, userid, comp_id) => {
    if (userWIn === true) {
        msg.innerText = `You Win!!!\n Your ${userid} beats ${comp_id}`
        msg2.style.backgroundColor = "green"
        user_Score++;
        score_y.innerText = user_Score;
        console.log("You Win!!!")
    }
    else if (userWIn === false) {
        msg.innerText = `You lose!!!\n ${comp_id} beats Your ${userid}`
        msg2.style.backgroundColor = "Red"
        comp_score++;
        score_c.innerText = comp_score
        console.log("Computer Wins!!!")
    }
}

restart.addEventListener("click", function () {
    user_Score = 0;
    comp_score = 0;
    msg.innerText = "Play Your Move"
    msg2.style.backgroundColor = "rgb(243, 111, 137)"
    score_c.innerText = 0;
    score_y.innerText = 0;
})
