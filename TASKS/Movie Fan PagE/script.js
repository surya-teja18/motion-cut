// Quotes of the Day Array
const quotes = [
    "It’s not our abilities that show what we truly are. It is our choices.",
    "I am Groot.",
    "The Force will be with you. Always.",
    "With great power comes great responsibility.",
    "Why so serious?"
];

// Function to display a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}

// Call the function to show a quote when the page loads
window.onload = getRandomQuote;

// Trivia Quiz Function
function checkQuiz() {
    const quizForm = document.getElementById('quizForm');
    const quizResult = document.getElementById('quizResult');
    
    const answer = quizForm.q1.value;
    if (answer === "correct") {
        quizResult.textContent = "You got it right!";
    } else {
        quizResult.textContent = "Oops! That's the wrong answer.";
    }
}
