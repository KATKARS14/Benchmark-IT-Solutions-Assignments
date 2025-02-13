interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

class Quiz {
    question: Question[];
    currIndex: number = 0;
    score: number = 0;
    selectedAns: string | null = null;

    constructor(question: Question[]) {
        this.question = question;
    }

    getCurrQuestion(): Question {
        return this.question[this.currIndex];
    }

    selAns(answer: string): void {
        this.selectedAns = answer;
    }

    goToNextQue(): void {
        if (this.selectedAns === this.getCurrQuestion().correctAnswer) {
            this.score++;
        }
        this.currIndex++;
        this.selectedAns = null;
    }

    /*checkAnswer(answer: string): void {
        if (answer === this.getCurrQuestion().correctAnswer) {
            this.score++;
        }
        this.currIndex++;
    }*/

    isQuizOver(): boolean {
        return this.currIndex >= this.question.length;
    }

    getScore(): number {
        return this.score;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const quiz = new Quiz([
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
        { question: "2 + 2 = ", choices: ["4", "6", "8", "1"], correctAnswer: "4" },
        { question: "100 - 10 = ", choices: ["0", "70", "90", "1"], correctAnswer: "90" },
    ]);

    const questionE1 = document.getElementById("question")!;
    const choicesE1 = document.getElementById("choices")!;
    const nextQue = document.getElementById("next-btn")!;
    const scoreE1 = document.getElementById("score")!;

    function displayQue() {
        if (quiz.isQuizOver()) {
            scoreE1.textContent = `Final Score -- ${quiz.getScore()}`;
            questionE1.textContent = "Quiz Over!!!";
            choicesE1.innerHTML = "";
            nextQue.style.display = "None";
            return;
        }

        const currQuestion = quiz.getCurrQuestion();
        questionE1.textContent = currQuestion.question;
        choicesE1.innerHTML = "";

        currQuestion.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.textContent = choice;
            btn.onclick = () => {
                quiz.selAns(choice);
                displayQue();
            };
            choicesE1.appendChild(btn);
        });
    }
    nextQue.addEventListener("click", () => {
        quiz.goToNextQue();
        displayQue();
    });
    displayQue();
});