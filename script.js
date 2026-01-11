let currentQuestion = 0;
        let score = 0;
        let userAnswer = null;
        let answered = false;

        let questions = [
            {
                question: "ในเกม RPG คำว่า 'HP' ย่อมาจากอะไร?",
                choices: ["High Power", "Health Points", "Hero Points", "Hit Points"],
                correct: 1
            },
            {
                question: "เกมแนว FPS หมายถึงอะไร?",
                choices: ["Fast Puzzle Solver", "First Person Shooter", "Flying Plane Simulator", "Fantasy Play Style"],
                correct: 1
            },
            {
                question: "Unity ใช้ภาษาอะไรเป็นหลัก?",
                choices: ["Python", "JavaScript", "C#", "C++"],
                correct: 2
            },
            {
                question: "ในเกม MOBA ตัวละครเรียกว่าอะไร?",
                choices: ["Hero", "Champion", "Character", "ทั้ง A และ B"],
                correct: 3
            },
            {
                question: "Frame Rate วัดด้วยหน่วยอะไร?",
                choices: ["MB/s", "FPS", "Hz", "Px"],
                correct: 1
            }

        ];

        let progressDiv = document.getElementById("progress");
        let questionDiv = document.getElementById("question");
        let choicesDiv = document.getElementById("choices");
        let nextBtn = document.getElementById("nextBtn");
        let resultDiv = document.getElementById("result");
        let scoreText = document.getElementById("scoreText");
        let restartBtn = document.getElementById("restartBtn");

        function showQuestion() {
            let current = questions[currentQuestion];
            answered = false;

            progressDiv.textContent = `Question ${currentQuestion + 1} of 5`;

            questionDiv.textContent = current.question;

            choicesDiv.innerHTML = "";

            current.choices.forEach((choice, index) => {

                let button = document.createElement("button");
                button.textContent = choice;
                button.classList.add("choice-btn");
                choicesDiv.appendChild(button)

                button.addEventListener("click", () => {
                    selectAnswer(index)
                });
            });

            nextBtn.style.display = "none"
        }

        nextBtn.addEventListener("click", function () {
            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        });

        function selectAnswer(index) {
            if (answered) return;

            userAnswer = index;
            let correctAnswer = questions[currentQuestion].correct

            if (userAnswer === correctAnswer) {
                score++;
            }

            answered = true;
            nextBtn.style.display = "block";
        }

        function showResult() {

            document.getElementById("progress").style.display = "none";
            document.getElementById("question").style.display = "none";
            document.getElementById("choices").style.display = "none";
            nextBtn.style.display = "none";

            resultDiv.style.display = "block";
            scoreText.textContent = `Your Score: ${score}/${questions.length}`;
        }

        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            answered = false

            resultDiv.style.display = "none";

            document.getElementById("progress").style.display = "block";
            document.getElementById("question").style.display = "block";
            document.getElementById("choices").style.display = "grid";

            showQuestion();
        }

        restartBtn.addEventListener("click", restartQuiz)

        showQuestion();