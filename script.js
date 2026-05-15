// EPIC 50-tier plant progression
let plantTiers = [
    { tier: 1, name: 'Tiny Seedling', emoji: '🌱' },
    { tier: 2, name: 'Baby Sprout', emoji: '🌿' },
    { tier: 3, name: 'Young Fern', emoji: '🍀' },
    { tier: 4, name: 'Growing Plant', emoji: '🌻' },
    { tier: 5, name: 'Blooming Flower', emoji: '🌷' },
    { tier: 6, name: 'Forest Guardian', emoji: '🌳' },
    { tier: 7, name: 'Ancient Oak', emoji: '🌲' },
    { tier: 8, name: 'Mystic Rose', emoji: '🌺' },
    { tier: 9, name: 'Golden Tree', emoji: '🍄' },
    { tier: 10, name: 'Crystal Blossom', emoji: '💎' },
    { tier: 11, name: 'Phoenix Flower', emoji: '🔥' },
    { tier: 12, name: 'Star Tree', emoji: '⭐' },
    { tier: 13, name: 'Galaxy Blossom', emoji: '🌌' },
    { tier: 14, name: 'Cosmic Tree', emoji: '🪐' },
    { tier: 15, name: 'Universe Flower', emoji: '🌟' },
    { tier: 16, name: 'Divine Lotus', emoji: '🪷' },
    { tier: 17, name: 'Celestial Vine', emoji: '🌙' },
    { tier: 18, name: 'Rainbow Orchid', emoji: '🌈' },
    { tier: 19, name: 'Thunder Blossom', emoji: '⚡' },
    { tier: 20, name: 'Solar Sunflower', emoji: '☀️' },
    { tier: 21, name: 'Quantum Rose', emoji: '🔬' },
    { tier: 22, name: 'Time Tree', emoji: '⏰' },
    { tier: 23, name: 'Infinity Bloom', emoji: '♾️' },
    { tier: 24, name: 'Omega Plant', emoji: '🛸' },
    { tier: 25, name: 'Genesis Tree', emoji: '👑' },
    { tier: 26, name: 'Void Blossom', emoji: '🕳️' },
    { tier: 27, name: 'Reality Flower', emoji: '🎭' },
    { tier: 28, name: 'Dimension Tree', emoji: '🌀' },
    { tier: 29, name: 'Eternal Bloom', emoji: '⚰️' },
    { tier: 30, name: 'Absolute Rose', emoji: '🏆' },
    { tier: 31, name: 'Nexus Flower', emoji: '🔮' },
    { tier: 32, name: 'Matrix Tree', emoji: '💻' },
    { tier: 33, name: 'Hologram Bloom', emoji: '👻' },
    { tier: 34, name: 'Data Vine', emoji: '📊' },
    { tier: 35, name: 'Code Blossom', emoji: '💾' },
    { tier: 36, name: 'Binary Tree', emoji: '🤖' },
    { tier: 37, name: 'Neural Flower', emoji: '🧠' },
    { tier: 38, name: 'AI Garden', emoji: '🤯' },
    { tier: 39, name: 'Cyber Rose', emoji: '⚙️' },
    { tier: 40, name: 'Digital God Tree', emoji: '🖥️' },
    { tier: 41, name: 'Mythic Bloom', emoji: '🐉' },
    { tier: 42, name: 'Ancient Power', emoji: '⚔️' },
    { tier: 43, name: 'Titan Flower', emoji: '🗿' },
    { tier: 44, name: 'Primordial Tree', emoji: '🌋' },
    { tier: 45, name: 'Creator Blossom', emoji: '🎨' },
    { tier: 46, name: 'Universe Maker', emoji: '🌍' },
    { tier: 47, name: 'Reality Shaper', emoji: '🔨' },
    { tier: 48, name: 'Existence Master', emoji: '👁️' },
    { tier: 49, name: 'Omnipotent Bloom', emoji: '🔱' },
    { tier: 50, name: 'ETERNAL GARDEN EMPEROR', emoji: '🎆' }
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
    habitProgress: habitTargets,
    totalTierUps: 0
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
        habitCard.classList.remove('completed');
        habitCard.classList.add('pending');
        habitCard.querySelector('.habit-status').innerText = '⏳';
        userData.habitProgress[habitName].current = 0;
        updateHabitDisplay(habitCard, habitName);
        removeCoins(10);
    } else {
        habitCard.classList.remove('pending');
        habitCard.classList.add('completed');
        habitCard.querySelector('.habit-status').innerText = '✅';
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
        progressText.innerText = habitInfo.current === 0 ? 'Track tonight' : habitInfo.current + '/' + habitInfo.target + ' ' + habitInfo.unit;
    } else if (habitName === 'Steps') {
        progressText.innerText = habitInfo.current.toLocaleString() + '/' + habitInfo.target.toLocaleString();
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
    
    let progressBar = document.querySelector('.progress');
    if (progressBar) progressBar.style.width = healthPercentage + '%';
    
    let percentageText = document.querySelector('.percentage');
    if (percentageText) percentageText.innerText = healthPercentage + '%';
    
    if (healthPercentage === 100 && completedCount === totalCount) {
        tierUpPlant();
    } else {
        let nextTierText = document.querySelector('.next-tier span');
        if (nextTierText) {
            let nextTier = userData.currentTier + 1;
            if (nextTier <= plantTiers.length) {
                nextTierText.innerText = 'Progress to Tier ' + nextTier + ': ' + completedCount + '/' + totalCount + ' habits completed today';
            } else {
                nextTierText.innerText = '🎆 THE ETERNAL GARDEN EMPEROR REIGNS! 🎆';
            }
        }
    }
    
    userData.plantHealth = healthPercentage;
}

// Tier up the plant
function tierUpPlant() {
    if (userData.currentTier < plantTiers.length) {
        userData.currentTier++;
        userData.plantsCollected++;
        userData.totalTierUps++;
        
        let newPlant = plantTiers[userData.currentTier - 1];
        userData.plantName = newPlant.name;
        
        updatePlantDisplay();
        updateStats();
        
        let bonusCoins = getBonusCoins(userData.currentTier);
        addCoins(bonusCoins);
        
        if (userData.currentTier % 5 === 0) {
            let bonusDiamonds = Math.floor(userData.currentTier / 5);
            if (userData.currentTier >= 40) bonusDiamonds += 50;
            else if (userData.currentTier >= 30) bonusDiamonds += 25;
            else if (userData.currentTier >= 20) bonusDiamonds += 10;
            userData.diamonds += bonusDiamonds;
            updateDiamondDisplay();
        }
        
        resetHabits();
        saveUserData();
        alert(getTierUpMessage(userData.currentTier, bonusCoins));
    } else {
        addCoins(100000);
        userData.diamonds += 1000;
        updateDiamondDisplay();
        saveUserData();
        alert('🎆👑 GRAND FINALE! 👑🎆\n\nYou achieved THE ETERNAL GARDEN EMPEROR!\n\n+100,000 COINS! +1,000 DIAMONDS!\n\nYou are the ultimate gardener! 🎆');
        resetHabits();
    }
}

// Calculate bonus coins based on tier
function getBonusCoins(tier) {
    if (tier >= 45) return 2000 + (tier * 200);
    if (tier >= 40) return 1500 + (tier * 150);
    if (tier >= 35) return 1200 + (tier * 120);
    if (tier >= 30) return 1000 + (tier * 100);
    if (tier >= 25) return 800 + (tier * 80);
    if (tier >= 20) return 600 + (tier * 60);
    if (tier >= 15) return 400 + (tier * 40);
    if (tier >= 10) return 250 + (tier * 25);
    if (tier >= 5) return 150 + (tier * 20);
    return 75 + (tier * 15);
}

// Get special tier up messages
function getTierUpMessage(tier, coins) {
    let plant = plantTiers[tier - 1];
    
    if (tier === 50) {
        return '🎆👑 GRAND FINALE! 👑🎆\n\nYour ' + plant.name + ' rules all existence!\n\n+' + coins + ' coins! +200 diamonds!';
    }
    if (tier >= 45) {
        return '🔱 OMNIPOTENT! Your ' + plant.name + ' controls existence! +' + coins + ' coins!';
    }
    if (tier >= 40) {
        return '🖥️ DIGITAL GOD! Your ' + plant.name + ' transcends reality! +' + coins + ' coins!';
    }
    if (tier >= 35) {
        return '💾 CYBER TIER! Your ' + plant.name + ' exists as pure code! +' + coins + ' coins!';
    }
    if (tier >= 30) {
        return '🏆 ABSOLUTE! Your ' + plant.name + ' achieved perfection! +' + coins + ' coins!';
    }
    if (tier >= 25) {
        return '👑 GENESIS! Your ' + plant.name + ' holds creation power! +' + coins + ' coins!';
    }
    if (tier >= 20) {
        return '☀️ SOLAR! Your ' + plant.name + ' radiates cosmic power! +' + coins + ' coins!';
    }
    if (tier >= 15) {
        return '🌟 UNIVERSE! Your ' + plant.name + ' contains cosmic essence! +' + coins + ' coins!';
    }
    if (tier >= 10) {
        return '💎 CRYSTAL! Your ' + plant.name + ' sparkles with magic! +' + coins + ' coins!';
    }
    if (tier >= 5) {
        return '🌸 BLOOMING! Your ' + plant.name + ' is beautiful! +' + coins + ' coins!';
    }
    return '🎉 Your plant evolved to ' + plant.name + '! +' + coins + ' coins!';
}

// Update plant display
function updatePlantDisplay() {
    let plantEmoji = document.querySelector('.plant');
    let plantNameElement = document.querySelector('.plant-name');
    let plantTierElement = document.querySelector('.plant-tier');
    
    if (userData.currentTier < 1 || userData.currentTier > plantTiers.length) {
        userData.currentTier = 1;
    }
    
    let currentPlant = plantTiers[userData.currentTier - 1];
    
    if (plantEmoji) plantEmoji.innerText = currentPlant.emoji;
    if (plantNameElement) plantNameElement.innerText = currentPlant.name;
    if (plantTierElement) plantTierElement.innerText = 'Tier ' + userData.currentTier;
}

// Update stats display
function updateStats() {
    let statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[1]) statNumbers[1].innerText = userData.plantsCollected;
    
    let dayElement = document.querySelector('.user-details p');
    if (dayElement) {
        let dayCount = userData.totalTierUps + 1;
        dayElement.innerText = 'Day ' + dayCount + ' of your garden journey';
    }
}

// Reset all habits to pending
function resetHabits() {
    let habitCards = document.querySelectorAll('.habit-card');
    
    for (let habitName in userData.habitProgress) {
        userData.habitProgress[habitName].current = 0;
    }
    
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
    userData.coins += amount;
    updateCoinDisplay();
}

// Remove coins
function removeCoins(amount) {
    if (userData.coins >= amount) {
        userData.coins -= amount;
        updateCoinDisplay();
    }
}

// Update coin display
function updateCoinDisplay() {
    let coinDisplay = document.querySelector('.coins');
    if (coinDisplay) coinDisplay.innerText = '🪙 ' + userData.coins;
}

// Update diamond display
function updateDiamondDisplay() {
    let diamondDisplay = document.querySelector('.diamonds');
    if (diamondDisplay) diamondDisplay.innerText = '💎 ' + userData.diamonds;
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
        userData = Object.assign(userData, loadedData);
        
        if (!userData.habitProgress) {
            userData.habitProgress = habitTargets;
        }
        if (!userData.totalTierUps) {
            userData.totalTierUps = userData.currentTier - 1;
        }
    }
    updateCoinDisplay();
    updateDiamondDisplay();
    updatePlantDisplay();
    updateStats();
}

// Start the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});
