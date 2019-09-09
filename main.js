// Helper function for getting elements
const $ = (id) => {
    return document.getElementById(id);
}

// Change Divs into buttons
$("scrabbleButton").oninput = () => {
    $("scrabbleButton").click();
}

$("monopolyButton").oninput = () => {
    $("monopolyButton").click();
}

$("yahtzeeButton").oninput = () => {
    $("yahtzeeButton").click();
}

// Animation callbacks
$("scrabbleButton").addEventListener('animationend', () => {
    $("gamePage").innerHTML = "<p>This should be a Scrabble page!</p>"
    $("gamePage").setAttribute("class", "helpFadeIn");
});

// Click function
$("scrabbleButton").addEventListener('click', () =>{
    $("gamePage").setAttribute("class", "helpFadeOut");
});

$("monopolyButton").addEventListener('click', () => {
    $("gamePage").innerHTML = "<p>This should be a Monopoly page!</p>"
});

$("yahtzeeButton").addEventListener('click', () => {
    $("gamePage").innerHTML = "<p>This should be a Yahtzee page!</p>"
});