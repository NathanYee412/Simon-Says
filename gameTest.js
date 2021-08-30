// button colors on the document
let buttonColors = ["red", "blue", "green", "yellow"];

// game pattern created with the nextSequence function
let gamePattern = [];


// game level 
let level = 0;

// current level
let currentLevel = 0;

// user clicked pattern
let userClickedPattern = [];

// get a random sequence and push it to the gamePattern variable 
function nextSequence() {
                
    // random number from 0 - 3
    let randomNumber = (Math.random() * 4);
    randomNumber = Math.floor(randomNumber);

    // choose color from array buttonColors and push to gamePattern array
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    
    console.log("random chosen color " + randomChosenColor);
    console.log("game pattern arr " + gamePattern);

    // fade button in and out for flash effect 
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    
    // play audio of the random chosen color 
    playSound(randomChosenColor);

    $(document).on("click", (event) => {
        let clickedColor = event.target.id;
        
        userClickedPattern.push(clickedColor);
        console.log("user clicked pattern " + userClickedPattern);
        playSound(clickedColor);
        animatePress(clickedColor);
        checkAnswer(level);
    });

    level++;
}

function playSound(name) {
    let chosenColorSound = new Audio('/sounds/' + name + '.mp3');
    chosenColorSound.play();
}

function animatePress(currentColor) {
    currentColor = "#" + currentColor;
    $(currentColor).addClass("pressed");
    setTimeout(() =>{
        $(currentColor).removeClass("pressed");
    }, 100);
}

// detect when a keyboard key is pressed
let firstPress = false;

$(document).on("keydown", (event) => {
    if(firstPress === false) {
        nextSequence();
        firstPress = true;
        $("#level-title").text("Level " + level);
    }
});

function checkAnswer(index) {
    if(userClickedPattern[index] === gamePattern[index]) {
        console.log("user has clicked the right pattern");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("user has clicked the wrong pattern");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Gamve over, press any key to restart");
        $(document).on("keydown", () => {
            startOver();
        });
    }
}

function startOver() { 
    level = 0;
    gamePattern = [];
    firstPress = false;
}