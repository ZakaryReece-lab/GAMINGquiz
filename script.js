// Array to store quiz questions and answers
const quizData = [{
        question: "What is the highest-grossing video game franchise to date?",
        options: ["Super Mario", "Pokémon", "Call of Duty", "FIFA"],
        answer: "Pokémon"
    },
    {
        question: "Which game is known for the quote, 'War. War never changes'?",
        options: ["Fallout", "Call of Duty", "Battlefield", "Medal of Honor"],
        answer: "Fallout"
    },
    {
        question: "Who is the main protagonist in The Legend of Zelda series?",
        options: ["Zelda", "Link", "Ganon", "Navi"],
        answer: "Link"
    },
    {
        question: "In which game do players compete in a battle royale on an island named Erangel?",
        options: ["Fortnite", "PUBG", "Apex Legends", "Warzone"],
        answer: "PUBG"
    },
    {
        question: "What is the main character’s name in the game 'The Witcher 3: Wild Hunt'?",
        options: ["Geralt", "Ciri", "Yennefer", "Dandelion"],
        answer: "Geralt"
    },
    {
        question: "Which game features a post-apocalyptic world with robotic dinosaurs?",
        options: ["Fallout 4", "Horizon Zero Dawn", "The Last of Us", "Mass Effect"],
        answer: "Horizon Zero Dawn"
    },
    {
        question: "Which game is set in the fictional country of Tsushima during a Mongol invasion?",
        options: ["Ghost of Tsushima", "Sekiro: Shadows Die Twice", "Nioh", "Assassin's Creed Valhalla"],
        answer: "Ghost of Tsushima"
    },
    {
        question: "What is the name of the city where the game Grand Theft Auto V is set?",
        options: ["Vice City", "Liberty City", "Los Santos", "San Fierro"],
        answer: "Los Santos"
    },
    {
        question: "In which game do you play as Arthur Morgan?",
        options: ["Red Dead Redemption 2", "Red Dead Redemption", "Call of Juarez", "Gun"],
        answer: "Red Dead Redemption 2"
    },
    {
        question: "What is the primary material used to craft weapons and armor in Minecraft?",
        options: ["Stone", "Iron", "Wood", "Diamond"],
        answer: "Diamond"
    },
    {
        question: "Who is the main antagonist in the Halo series?",
        options: ["The Arbiter", "The Flood", "The Covenant", "The Didact"],
        answer: "The Didact"
    },
    {
        question: "Which game series features locations such as Tamriel and Nirn?",
        options: ["Dark Souls", "Dragon Age", "The Elder Scrolls", "Baldur's Gate"],
        answer: "The Elder Scrolls"
    },
    {
        question: "In which game do players control characters named Scout, Soldier, and Pyro?",
        options: ["Overwatch", "Team Fortress 2", "Apex Legends", "Valorant"],
        answer: "Team Fortress 2"
    },
    {
        question: "What is the name of the virus in the Resident Evil series?",
        options: ["T-Virus", "G-Virus", "C-Virus", "R-Virus"],
        answer: "T-Virus"
    },
    {
        question: "Which character is known as the 'God of War'?",
        options: ["Zeus", "Hades", "Kratos", "Ares"],
        answer: "Kratos"
    },
    {
        question: "In which game do you play as a hunter of colossal creatures known as 'Titans'?",
        options: ["Shadow of the Colossus", "Monster Hunter", "God of War", "Dark Souls"],
        answer: "Shadow of the Colossus"
    },
    {
        question: "What is the name of the protagonist in the Metal Gear Solid series?",
        options: ["Solid Snake", "Big Boss", "Raiden", "Liquid Snake"],
        answer: "Solid Snake"
    },
    {
        question: "Which game series features the character Master Chief?",
        options: ["Gears of War", "Halo", "Destiny", "Mass Effect"],
        answer: "Halo"
    },
    {
        question: "In which game do you explore an underwater city called Rapture?",
        options: ["Bioshock", "Subnautica", "Deep Sea Adventures", "Aquanox"],
        answer: "Bioshock"
    },
    {
        question: "Which game allows players to build and manage their own farm?",
        options: ["Animal Crossing", "Stardew Valley", "Harvest Moon", "Farmville"],
        answer: "Stardew Valley"
    }
];
// Track the current question index
let currentQuestionIndex = 0;

// Store user answers
const userAnswers = [];

// Function to initialize the quiz
function initializeQuiz() {
    // Display the first question
    displayQuestion(currentQuestionIndex);
}

// Function to display a question
function displayQuestion(index) {
// Get the question container element
    const questionContainer = document.querySelector('.question-container')
// Get the current question data
    const questionData = quizData[index];

// Inject the question and options into the container
    questionContainer.innerHTML = `
  <p>${index + 1}. ${questionData.question}</p>
  ${questionData.options.map((option, i) => `
      <label>
          <input type="radio" name="question${index}" value="${option}"> ${option}
      </label>
  `).join('')}
`;
}
// Function to handle next question
function nextQuestion() {
// Get the selected option for the current question
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
// Store the user's answer
        userAnswers[currentQuestionIndex] = selectedOption.value;
// Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
// Display the next question
            displayQuestion(currentQuestionIndex);
        } else {
// Show the results if it was the last question
            showResults();
        }
    } else {
// Alert the user if no option is selected
        alert('Please select an option before proceeding.');
    }
}
// Function to show results
function showResults() {
    let score = 0;
    let resultsHTML = '<h2>Quiz Results</h2><ul>';
    
// Loop through the questions and check the user's answers
for (let i = 0; i < quizData.length; i++) {
    const correctAnswer = quizData[i].answer;
    const userAnswer = userAnswers[i];
    
    if (userAnswer === correctAnswer) {
        score++;
        resultsHTML += `<li>Question ${i + 1}: Correct</li>`;
    } else {
        resultsHTML += `<li>Question ${i + 1}: Incorrect (Correct answer: ${correctAnswer})</li>`;
    }
}
}
// Function to handle feedback form submission
function handleFeedbackSubmission(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the feedback text
    const feedback = document.getElementById('feedback-text').value;
    if (feedback.length < 10) {
        alert('Feedback is too short. Please provide more details.');
    } else {
        alert('Thank you for your feedback: ' + feedback);
    }
}
