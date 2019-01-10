var card = $("#quiz-area");
var countStartNumber = 15;

//Variable with the trivia questions

var questions = [{
    question: "Who won the 1993 NBA Championship?",
    answers: ["Utah Jazz", "Chicago Bulls", "Pheonix Suns", "Houtson Rockets"],
    correctAnswer: "Chicago Bulls",
    // image: ,
}, {
    question: "What year did Michael Jordan retire for the first time?",
    answers: ["1989", "1991", "1993", "1998"],
    correctAnswer: "1993",
    // image: ,
}, {
    // question: ,
    // answers: ,
    // correctAnswer: ,
    // image: ,
}];


var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            console.log("Out of Time");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);

        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i =0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button' id='button' data-name = '" + questions[this.currentQuestion].answers[i]
            + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").text(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        clearInterval (timer);

        $("#counter-number").html(game.counter);

        card.html("<h2> Time's Up! </h2>");
        card.append("<h3> The Correct Answer Was: " + questions[this.currentQuestion].correctAnswer);
        card.append("img src = '" + questions [this.currentQuestion].image + "'/>");
        
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.nextQuestion, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function(){

        clearInterval(timer);

        card.html("<h2>All done! Here are your results!");

        $("#counter-number").text(game.counter);

        card.append("<h3>Correct Answers: " + game.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        card.append("<br><button id = 'start-over'>Retry? </button>");

    },

    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        } else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {

        game.incorrect++;

        clearInterval(timer);

        card.html("<h2>Wrong!</h2>");
        card.html("<h3> The right answer is: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        card.html("img src = '" + questions[game.currentQuestion].image + "'/>");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3* 1000);
        }
    },

    answeredCorrectly: function() {

        clearInterval (timer);

        game.correct++;

        card.html("<h2> Correct! </h2>")
        card.html("img src = '" + questions[question.currentQuestion].image + "'/>");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3* 1000);
        }
    },

    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};

$(document).on("click", "#start-over", function() {
    game.reset();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id = ' counter-number'>15</span> Seconds</h2>");
    game.loadQuestion();
});


//Create a function that initiates the game

//This function will replace the start button with one random question
// gameStart function(click) {
//     $("#gameStartButton").on('click'){
//         $("#question").html("<h3>This is a test</h3>");
//     }
// }

// gameStart();

//Once the game has been initiated, create a timer that counts down from 10 seconds

//Create an if statement that determines whether or not the user answered the question correctly or incorrectly

//Create another timer for 5 seconds displaying whether the user gave the correct answer

//Create an else statment that ends the question if the timer is set to 0 seconds

//Create a function that resets the timer and pick another random question

//Repeat this until the game reaches 10 questions

//Once the game reaches 10 questions, create a function that tallys up the correct answers and divedes that by the total number of questions asked to give the user
//his/her score

//Create a "Start Over" button that resets the game