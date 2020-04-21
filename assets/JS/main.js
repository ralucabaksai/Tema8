function play() {
    var options = ["Rock", "Paper", "Scissors"];
    var user = Math.random();
    var comp = Math.random();
    var result;

    if (user <= 0.33) {
        user = options[0];
    } else if ((user > 0.33) && (user <= 0.66)) {
        user = options[1];
    } else {
        user = options[2];
    }
    console.log("User's choice:",
        user);

    if (comp <= 0.33) {
        comp = options[0];
    } else if ((comp > 0.33) && (comp <= 0.66)) {
        comp = options[1];
    } else {
        comp = options[2];
    }

    console.log("Computer's choice:",
        comp);

    if (user === comp) {
        result = "Draw!";
    } else if ((user === "Rock") && (comp === "Paper")) {
        result = "Computer wins!"
    } else if ((user = "Rock") && (comp === "Scissors")) {
        result = "User wins!"
    } else if ((user = "Paper") && (comp === "Rock")) {
        result = "User wins!"
    } else if ((user = "Paper") && (comp === "Scissors")) {
        result = "Computer wins!"
    } else if ((user = "Scissors") && (comp === "Rock")) {
        result = "Computer wins!"
    } else if ((user = "Scissors") && (comp === "Paper")) {
        result = "User wins!"
    }
    console.log(result);
}
play();