// button colors on the document
let buttonColors = ["red", "blue", "green", "yellow"];

// game pattern created with the nextSequence function
let gamePattern = [];

// user clicked pattern
let userClickedPattern = [];

// game level 
let level = 0;

// get a random sequence and push it to the gamePattern variable
// will push only a single color to the array
function nextSequence() {
    let randomNumber = (Math.random() * 4);
    randomNumber = Math.floor(randomNumber);
    
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    level++;

    $(document).on("click", (event) => {
        
    });


}

// click event listeners for colored buttons that will flash
// and play sounds when clicked
$("#green").click(() => {
    $("#green").fadeOut(100).fadeIn(100);
    let greenSound = new Audio('/sounds/green.mp3');
    greenSound.play();
});

$("#red").click(() => {
    $("#red").fadeOut(100).fadeIn(100);
    let redSound = new Audio('/sounds/red.mp3');
    redSound.play();
});

$("#blue").click(() => {
    $("#blue").fadeOut(100).fadeIn(100);
    let blueSound = new Audio('/sounds/blue.mp3');
    blueSound.play();
});

$("#yellow").click(() => {
    $("#yellow").fadeOut(100).fadeIn(100);
    let yellowSound = new Audio('/sounds/yellow.mp3');
    yellowSound.play();
});

// change background color of button when user clicks button
function animatePress(currentColor) {
    currentColor = "#" + currentColor;
    $(currentColor).addClass("pressed");
    setTimeout(() =>{
        $(currentColor).removeClass("pressed");
    }, 100);
}


// detect when any buttons are clicked to trigger a handler function
// add the id of the button to the array userClickedPattern
$(document).click((event) => {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    animatePress(event.target.id);
});

// play sound when depending on color passed in as input
function playSound(color) {
    switch (color) {
        case "blue":
            let blueSound = new Audio('/sounds/blue.mp3');
            blueSound.play();
            break;
        case "yellow":
            let yellowSound = new Audio('/sounds/yellow.mp3');
            yellowSound.play();
            break;
        case "red":
            let redSound = new Audio('/sounds/red.mp3');
            redSound.play();
            break;
        case "green":
            let greenSound = new Audio('/sounds/green.mp3');
            greenSound.play();
            break;
        default:
            break;
    }
}

let firstPress = false;

// detect when a keyboard key is pressed
$(document).on("keydown", (event) => {
    if(firstPress === false) {
        nextSequence();
        firstPress = true;
    }

    $("#level-title").text("Level " + level);

});
