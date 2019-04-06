var wins=0
var losses=0
var totalScore=0
var goalScore = Math.floor(math.random()*200)
var userScoreArray=[""]

$("#crystalOne").on("click", function(){
    userScoreArray.push(Math.floor(Math.random()*12))
    console.log(underScoreArray)
    alert("works")
})

$("winner").append(wins)

$("loser").append(losses)

