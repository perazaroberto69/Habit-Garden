// Plant tier data
let plantTiers = [
    { tier: 1, name: 'Tiny Seedling', emoji: '🌱' },
    { tier: 2, name: 'Baby Fern', emoji: '🌿' },
    { tier: 3, name: 'Forest Guardian', emoji: '🌳' },
    { tier: 4, name: 'Ancient Oak', emoji: '🌲' },
    { tier: 5, name: 'Mystic Tree', emoji: '🌟' }
];

// Habit progress data
let habitTargets = {
    'Water Intake': { current: 0, target: 8, unit: 'glasses' },
    'Exercise': { current: 0, target: 30, unit: 'min' },
    'Steps': { current: 0, target: 10000, unit: 'steps' },
    'Sleep': { current: 0, target: 8, unit: 'hours' },
    'Reading': { current: 0, target: 20, unit: 'min' }
};

// Store user data - starting from zero
let userData = {
    coins: 0,
    diamonds: 5,
    plantHealth: 0,
    currentTier: 1,
    plantName: 'Tiny Seedling',
    dayStreak: 1,
    plantsCollected: 1,
    habitProgress: habitTargets
};

// Initialize the app
function initializeApp() {
    setupHabitClicks();
    loadUserData();
    updateAllHabitDisplays();
}

// Make habit cards clickable
function setupHabitClicks() {
    let habitCards = document.querySelectorAll('.habit-card');
    
    for (let i = 0; i < habitCards.length; i++) {
        habitCards[i].addEventListener('click', function() {
            toggleHabit(habitCards[i]);
        });
    }
}

// Toggle habit completion
function toggleHabit(habitCard) {
    let habitName = habitCard.querySelector('h4').innerText;
    let isCompleted = habitCard.classList.contains('completed');
    
    if (isCompleted) {
        // Mark as incomplete
        habitCard.classList.remove('completed');
        habitCard.classList.add('pending');
        habitCard.querySelector('.habit-status').innerText = '⏳';
        
        // Reset progress to 0
        userData.habitProgress[habitName].current = 0;
        updateHabitDisplay(habitCard, habitName);
        
        removeCoins(10);
    } else {
        // Mark as complete
        habitCard.classList.remove('pending');
        habitCard.classList.add('completed');
        habitCard.querySelector('.habit-status').innerText = '✅';
        
        // Set progress to target (full completion)
        userData.habitProgress[habitName].current = userData.habitProgress[habitName].target;
        updateHabitDisplay(habitCard, habitName);
        
        addCoins(10);
    }
    
    updatePlantProgress();
    saveUserData();
}

// Update individual habit display
function updateHabitDisplay(habitCard, habitName) {
    let habitInfo = userData.habitProgress[habitName];
    let progressText = habitCard.querySelector('.habit-info p');
    
    if (habitName === 'Sleep') {
        if (habitInfo.current === 0) {
            progressText.innerText = 'Track tonight';
        } else {
            progressText.innerText = habitInfo.current + '/' + habitInfo.target + ' ' + habitInfo.unit;
        }
    } else if (habitName === 'Steps') {
        // Format steps with commas
        let currentFormatted = habitInfo.current.toLocaleString();
        let targetFormatted = habitInfo.target.toLocaleString();
        progressText.innerText = currentFormatted + '/' + targetFormatted;
    } else {
        progressText.innerText = habitInfo.current + '/' + habitInfo.target + ' ' + habitInfo.unit;
    }
}

// Update all habit displays
function updateAllHabitDisplays() {
    let habitCards = document.querySelectorAll('.habit-card');
    
    for (let i = 0; i < habitCards.length; i++) {
        let habitName = habitCards[i].querySelector('h4').innerText;
        updateHabitDisplay(habitCards[i], habitName);
    }
}

// Update plant progress
function updatePlantProgress() {
    let completedHabits = document.querySelectorAll('.habit-card.completed');
    let totalHabits = document.querySelectorAll('.habit-card');
    
    let completedCount = completedHabits.length;
    let totalCount = totalHabits.length;
    let healthPercentage = Math.round((completedCount / totalCount) * 100);
    
    // Update progress bar
    let progressBar = document.querySelector('.progress');
    if (progressBar) {
        progressBar.style.width = healthPercentage + '%';
    }
    
    // Update percentage text
    let percentageText = document.querySelector('.percentage');
    if (percentageText) {
        percentageText.innerText = healthPercentage + '%';
    }
    
    // Check if plant should tier up
    if (healthPercentage === 100 && completedCount === totalCount) {
        tierUpPlant();
    } else {
        // Update tier progress text
        let nextTierText = document.querySelector('.next-tier span');
        if (nextTierText) {
            let nextTier = userData.currentTier + 1;
            if (nextTier <= plantTiers.length) {
                nextTierText.innerText = 'Progress to Tier ' + nextTier + ': ' + completedCount + '/' + totalCount + ' habits completed today';
            } else {
                nextTierText.innerText = 'Max tier reached! Keep growing!';
            }
        }
    }
    
    userData.plantHealth = healthPercentage;
}

// Tier up the plant
function tierUpPlant() {
    if (userData.currentTier < plantTiers.length) {
        userData.currentTier = userData.currentTier + 1;
        userData.plantsCollected = userData.plantsCollected + 1;
        
        // Find new plant data
        let newPlant = plantTiers[userData.currentTier - 1];
        userData.plantName = newPlant.name;
        
        // Update plant display
        updatePlantDisplay();
        updateStats();
        
        // Give bonus coins for tiering up
        addCoins(100);
        
        // Reset all habits
        resetHabits();
        
        // Show celebration message
        alert('🎉 Congratulations! Your plant evolved to ' + newPlant.name + '! You earned 100 bonus coins!');
    }
}

// Update plant display
function updatePlantDisplay() {
    let plantEmoji = document.querySelector('.plant');
    let plantNameElement = document.querySelector('.plant-name');
    let plantTierElement = document.querySelector('.plant-tier');
    
    // Safety check
    if (userData.currentTier < 1 || userData.currentTier > plantTiers.length) {
        userData.currentTier = 1;
    }
    
    let currentPlant = plantTiers[userData.currentTier - 1];
    
    if (plantEmoji) {
        plantEmoji.innerText = currentPlant.emoji;
    }
    if (plantNameElement) {
        plantNameElement.innerText = currentPlant.name;
    }
    if (plantTierElement) {
        plantTierElement.innerText = 'Tier ' + userData.currentTier;
    }
}

// Update stats display
function updateStats() {
    let statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[1]) {
        statNumbers[1].innerText = userData.plantsCollected;
    }
}

// Reset all habits to pending
function resetHabits() {
    let habitCards = document.querySelectorAll('.habit-card');
    
    // Reset all habit progress to 0
    for (let habitName in userData.habitProgress) {
        userData.habitProgress[habitName].current = 0;
    }
    
    // Reset visual display
    for (let i = 0; i < habitCards.length; i++) {
        habitCards[i].classList.remove('completed');
        habitCards[i].classList.add('pending');
        habitCards[i].querySelector('.habit-status').innerText = '⏳';
        
        let habitName = habitCards[i].querySelector('h4').innerText;
        updateHabitDisplay(habitCards[i], habitName);
    }
    
    updatePlantProgress();
}

// Add coins
function addCoins(amount) {
    userData.coins = userData.coins + amount;
    updateCoinDisplay();
}

// Remove coins
function removeCoins(amount) {
    if (userData.coins >= amount) {
        userData.coins = userData.coins - amount;
        updateCoinDisplay();
    }
}

// Update coin display
function updateCoinDisplay() {
    let coinDisplay = document.querySelector('.coins');
    if (coinDisplay) {
        coinDisplay.innerText = '🪙 ' + userData.coins;
    }
}

// Save data
function saveUserData() {
    localStorage.setItem('habitGardenData', JSON.stringify(userData));
}

// Load data
function loadUserData() {
    let savedData = localStorage.getItem('habitGardenData');
    if (savedData) {
        let loadedData = JSON.parse(savedData);
        // Merge loaded data with current structure to handle new properties
        userData = Object.assign(userData, loadedData);
        
        // Make sure habit progress exists
        if (!userData.habitProgress) {
            userData.habitProgress = habitTargets;
        }
    }
    updateCoinDisplay();
    updatePlantDisplay();
    updateStats();
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});
