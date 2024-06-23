let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked!",userChoice);
        playGame(userChoice);
    });
});
const draw =()=>{
    console.log("game was draw");
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#ff7d00";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText =`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText =`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const genCompChoice = ()=>{
    let options =["rock","paper","scissor"]
    const randIdx= Math.floor(Math.random()*3)//its genarate range[0-1] so for [0-2] mul by 3
    return options[randIdx];
}
const playGame = (userChoice) =>{
    console.log("user choice:",userChoice);
    //generate computer choice ->modular
    const compChoice = genCompChoice();
    console.log("Comp choice :",compChoice);

    if(userChoice == compChoice){
        //draw
        draw();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissor,paper
            userWin = compChoice == "paper"? false: true;
        }else if(userChoice == "paper"){
            //rock , scissor
           userWin = compChoice == "scissor"?false : true;
        }else{
            //rock,paper
            userWin = compChoice == "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}