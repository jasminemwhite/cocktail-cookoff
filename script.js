document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scoresForm');
    const results = document.getElementById('results');
    const resultsContent = document.getElementById('resultsContent');
    const passwordPrompt = document.getElementById('passwordPrompt');
    const viewResultsButton = document.getElementById('viewResults');
    const passwordInput = document.getElementById('password');
    const correctPassword = 'avalanche4310';  // Change this to your desired password

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const scores = Array.from(form.querySelectorAll('.participant')).map(participant => {
            const name = participant.getAttribute('data-name');
            const appetizer = parseInt(participant.querySelector('input[name="appetizer"]').value);
            const cocktail = parseInt(participant.querySelector('input[name="cocktail"]').value);
            const pairing = parseInt(participant.querySelector('input[name="pairing"]').value);
            const presentation = parseInt(participant.querySelector('input[name="presentation"]').value);
            
            const total = appetizer + cocktail + pairing + presentation;
            return { name, appetizer, cocktail, pairing, presentation, total };
        });

        scores.sort((a, b) => b.total - a.total);

        resultsContent.innerHTML = scores.map(score => `
            <p>${score.name}: ${score.total} (Appetizer: ${score.appetizer}, Cocktail: ${score.cocktail}, Pairing: ${score.pairing}, Presentation: ${score.presentation})</p>
        `).join('');
        
        passwordPrompt.style.display = 'block';
    });

    viewResultsButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            results.style.display = 'block';
            passwordPrompt.style.display = 'none';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
});
