function printdoc(win, losses, guessesLeft, guesses) {

    var html =
        "<h2>Guess what letter I am thinking of</h2>" + "<br" +

        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guesses + "</p>";;

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};

function isLetter(userGuess) {
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") ||
        (userGuess === "d") || (userGuess === "e") || (userGuess === "f") ||
        (userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
        (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
        (userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
        (userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
        (userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
        (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
        (userGuess === "y") || (userGuess === "z")) { return true; } else { return false; }
};