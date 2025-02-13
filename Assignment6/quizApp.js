var Quiz = /** @class */ (function () {
    function Quiz(question) {
        this.currIndex = 0;
        this.score = 0;
        this.selectedAns = null;
        this.question = question;
    }
    Quiz.prototype.getCurrQuestion = function () {
        return this.question[this.currIndex];
    };
    Quiz.prototype.selAns = function (answer) {
        this.selectedAns = answer;
    };
    Quiz.prototype.goToNextQue = function () {
        if (this.selectedAns === this.getCurrQuestion().correctAnswer) {
            this.score++;
        }
        this.currIndex++;
        this.selectedAns = null;
    };
    /*checkAnswer(answer: string): void {
        if (answer === this.getCurrQuestion().correctAnswer) {
            this.score++;
        }
        this.currIndex++;
    }*/
    Quiz.prototype.isQuizOver = function () {
        return this.currIndex >= this.question.length;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    return Quiz;
}());
document.addEventListener("DOMContentLoaded", function () {
    var quiz = new Quiz([
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
    ]);
    var questionE1 = document.getElementById("question");
    var choicesE1 = document.getElementById("choices");
    var nextQue = document.getElementById("next-btn");
    var scoreE1 = document.getElementById("score");
    function displayQue() {
        if (quiz.isQuizOver()) {
            scoreE1.textContent = "Final Score -- ".concat(quiz.getScore());
            questionE1.textContent = "Quiz Over!!!";
            choicesE1.innerHTML = "";
            nextQue.style.display = "None";
            return;
        }
        var currQuestion = quiz.getCurrQuestion();
        questionE1.textContent = currQuestion.question;
        choicesE1.innerHTML = "";
        currQuestion.choices.forEach(function (choice) {
            var btn = document.createElement("button");
            btn.textContent = choice;
            btn.onclick = function () {
                quiz.selAns(choice);
                displayQue();
            };
            choicesE1.appendChild(btn);
        });
    }
    nextQue.addEventListener("click", function () {
        quiz.goToNextQue();
        displayQue();
    });
    displayQue();
});
