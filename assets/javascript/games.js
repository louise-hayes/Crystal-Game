// variables ***************************************

var winCntr = 0;
var lossesCntr = 0;
var totalScore = 0;

var titleDiv = document.getElementById("titleDiv");
var instructionsDiv = document.getElementById("instructionsDiv");
var targetScoreDiv = document.getElementById("targetScoreDiv");
var scoreTitleDiv = document.getElementById("scoreTitleDiv");
var winCounterDiv = document.getElementById("winCounterDiv");
var lossesCounterDiv = document.getElementById("lossesCounterDiv");
var crystalButtonDiv = document.getElementById("crystalButtonDiv");
var totalScoreTitleDiv = document.getElementById("totalScoreTitleDiv");
var totalScoreNumberDiv = document.getElementById("totalScoreNumberDiv");

// define crystal object
var crystal = {
    crystalFunction: function () {
        totalScore += crystalScore;
        $("#totalScoreNumberDiv").text(totalScore);

    },

    crystalNumberArray: [],

    //come back to this 
    // totalScoreCheck: function (event) {}
};

//Functions *****************************************

//  find a random number - Returns a random number

function getTargetScore() {
    var randomNo = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log("random No = " + randomNo);

    // show this random no at start of app in targetScoreDiv
    // $("#targetScoreDiv").html("randomNo");
    $("#targetScoreDiv").text(randomNo);
    console.log("random no is " + randomNo);
    return randomNo;

}

function getRandmoNo(posIndex) {
    var randomNo = Math.floor(Math.random() * 12 + 1);
    crystal.crystalNumberArray[posIndex] = randomNo;
    // crystal.crystalNumberArray[i] = Math.floor(Math.random() * 9 + 1);
    console.log("random No for this crystal is + " + crystal.crystalNumberArray[posIndex]);
}



    function init() {
        var scoreToGet = getTargetScore();
        console.log(scoreToGet);
        $("#totalScoreTitleDiv").text("Your Total Score Is: ");
        $("#totalScoreNumberDiv").text(0);
        $("#winCounterDiv").text("Wins : " + winCntr);
        $("#lossesCounterDiv").text("Losses: " + lossesCntr);
        // for loop for every crystal number required:

        for (var i = 0; i < 4; i++) {
            getRandmoNo(i);
            // dynamically generate crystal imageCrystal

            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystalimageDiv".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystalimageDiv");

            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/pink.jpg");

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            // imageCrystal.attr("data-crystalvalue", crystal.crystalNumberArray[i]);
            var randomNoInObject = [];
            randomNoInObject[i] = crystal.crystalNumberArray[i];
            imageCrystal.attr("data-crystalvalue", randomNoInObject[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#imgCrystal").append(imageCrystal);
        }
        // end loop

        $(".crystalimageDiv").on("click", function () {
            // calls the crystal function and adds that crystal value to your totalScore
            // checks if your totalscore is over the target score
            // call crystal function and tally total score
            // crystal.crystalFunction(crystalScore); to be refactored later
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            totalScore += crystalValue;
            $("#totalScoreNumberDiv").text(totalScore);
            // All of the same game win-lose logic applies. So the rest remains unchanged.

            if (totalScore === scoreToGet) {
                winCntr++;
                totalScore = 0;
                $("#countersTitleDiv").html("You Win!");
                $("#winCounterDiv").text("Wins : " + winCntr);
                $("#totalScoreNumberDiv").text(totalScore);
                scoreToGet = getTargetScore();

            } else if (totalScore >= scoreToGet) {
                lossesCntr++;
                totalScore = 0;
                $("#countersTitleDiv").text("You Loose!");
                $("#lossesCounterDiv").text("Losses: " + lossesCntr);
                $("#totalScoreNumberDiv").text(totalScore);
                scoreToGet = getTargetScore();
            }

        });

    }
    
$(document).ready(function () {    

init();
});