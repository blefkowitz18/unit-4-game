var wins = 0
var losses = 0
var totalScore 
var goalScore
var crystalOneValue
var crystalTwoValue
var crystalThreeValue
var crystalFourValue 

$("#crystalOne").on("click", function(){
    console.log(crystalOneValue);
    totalScore += crystalOneValue;
    console.log(totalScore);
    printValuesToScreen();
    checkProgress();
})

$("#crystalTwo").on("click", function(){
    console.log(crystalTwoValue);
    totalScore += crystalTwoValue;
    console.log(totalScore);
    printValuesToScreen();
    checkProgress();
})

$("#crystalThree").on("click", function(){
    console.log(crystalThreeValue);
    totalScore += crystalThreeValue;
    console.log(totalScore);
    printValuesToScreen();
    checkProgress();
})

$("#crystalFour").on("click", function(){
    console.log(crystalFourValue);
    totalScore += crystalFourValue;
    console.log(totalScore);
    printValuesToScreen();
    checkProgress();
})



function reset(){
    totalScore=0
    console.log(totalScore)
    
    goalScore = Math.floor(Math.random() * 200 + 50)
    console.log(goalScore)

    // first number is highest number, second is lowest
    
    crystalOneValue = Math.floor(Math.random() * 12 + 1)
    console.log(crystalOneValue)
    
    crystalTwoValue = Math.floor(Math.random() * 12 + 1)
    console.log(crystalTwoValue)
    
    crystalThreeValue = Math.floor(Math.random() * 12 + 1)
    console.log(crystalThreeValue)
    
    crystalFourValue = Math.floor(Math.random() * 12 + 1)
    console.log(crystalFourValue)
    
    printValuesToScreen()
}
reset()

function printValuesToScreen(){
    $("#goal").html(goalScore)

    $("#winner").html("Wins: "+ wins)

    $("#loser").html("Losses: "+ losses)

    $("#userScore").html(totalScore)

}


function checkProgress (){
    if(totalScore === goalScore){
        alert("Yay You win!!");
        wins++;
        reset()
    }
    else if (totalScore < goalScore){
        console.log("keep clicking")
    }
    else{
        alert("Ha-Ha You lose!!");
        losses++;
        reset()
    }
}

