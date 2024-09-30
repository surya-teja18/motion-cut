// Voting Functionality
function submitVote() {
    const voteForm = document.getElementById('voteForm');
    const voteResult = document.getElementById('voteResult');
    
    const player = voteForm.player.value;
    if (player) {
        voteResult.textContent = `Thank you for voting! You chose ${player}.`;
    } else {
        voteResult.textContent = "Please select a player to vote.";
    }
}

// Fan Story Submission
document.getElementById('fanStoryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const story = document.getElementById('story').value;
    
    if (story.trim()) {
        alert('Thank you for sharing your story!');
        document.getElementById('story').value = '';  // Clear the textarea
    } else {
        alert('Please write something before submitting.');
    }
});
