// Game state management
let gameState = {
    currentScene: 'start',
    inventory: [],
    playerStats: {
        rank: 'Police Officer',
        score: 0
    }
};

// Initialize game when document is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

function initializeGame() {
    updateScene('Welcome to your first day on patrol, Officer Bonds.');
}

function updateScene(description) {
    const sceneElement = document.getElementById('scene-description');
    if (sceneElement) {
        sceneElement.textContent = description;
    }
}
