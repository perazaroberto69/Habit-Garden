// Plant tier data - must match script.js
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

// Breeding-exclusive hybrid plants
let hybridPlants = [
    { tier: 2, name: 'Clover Sprout', emoji: '☘️', parents: [1, 2], breedingOnly: true },
    { tier: 3, name: 'Cherry Blossom', emoji: '🌸', parents: [2, 3], breedingOnly: true },
    { tier: 4, name: 'Lavender Bush', emoji: '🪻', parents: [3, 4], breedingOnly: true },
    { tier: 5, name: 'Lily Flower', emoji: '🌼', parents: [4, 5], breedingOnly: true },
    { tier: 6, name: 'Maple Tree', emoji: '🍁', parents: [5, 6], breedingOnly: true },
    { tier: 7, name: 'Palm Tree', emoji: '🌴', parents: [6, 7], breedingOnly: true },
    { tier: 8, name: 'Hibiscus', emoji: '🌺', parents: [7, 8], breedingOnly: true },
    { tier: 9, name: 'Magic Mushroom', emoji: '🍄‍🟫', parents: [8, 9], breedingOnly: true },
    { tier: 10, name: 'Diamond Rose', emoji: '💍', parents: [9, 10], breedingOnly: true },
    { tier: 12, name: 'Comet Flower', emoji: '☄️', parents: [11, 12], breedingOnly: true },
    { tier: 14, name: 'Nebula Plant', emoji: '🌠', parents: [13, 14], breedingOnly: true },
    { tier: 16, name: 'Aurora Vine', emoji: '🌌', parents: [15, 16], breedingOnly: true },
    { tier: 18, name: 'Prism Blossom', emoji: '🔆', parents: [17, 18], breedingOnly: true },
    { tier: 20, name: 'Eclipse Tree', emoji: '🌑', parents: [19, 20], breedingOnly: true },
    { tier: 23, name: 'Paradox Flower', emoji: '🔀', parents: [21, 22], breedingOnly: true },
    { tier: 25, name: 'Singularity Plant', emoji: '⚫', parents: [24, 25], breedingOnly: true },
    { tier: 28, name: 'Fractal Vine', emoji: '🌀', parents: [26, 27], breedingOnly: true },
    { tier: 30, name: 'Immortal Bloom', emoji: '♾️', parents: [29, 30], breedingOnly: true },
    { tier: 33, name: 'Glitch Flower', emoji: '📳', parents: [31, 32], breedingOnly: true },
    { tier: 35, name: 'Pixel Tree', emoji: '🎮', parents: [34, 35], breedingOnly: true },
    { tier: 38, name: 'Quantum AI', emoji: '🧬', parents: [36, 37], breedingOnly: true },
    { tier: 40, name: 'Neon Bloom', emoji: '🔮', parents: [39, 40], breedingOnly: true },
    { tier: 43, name: 'Dragon Flower', emoji: '🐲', parents: [41, 42], breedingOnly: true },
    { tier: 45, name: 'Volcano Bloom', emoji: '🌋', parents: [43, 44], breedingOnly: true },
    { tier: 48, name: 'God Tree', emoji: '🕉️', parents: [46, 47], breedingOnly: true },
    { tier: 50, name: 'Cosmic Emperor', emoji: '👑', parents: [49, 50], breedingOnly: true }
];

// Combine all plants
let allPlants = plantTiers.concat(hybridPlants);

let userData = {
    coins: 0,
    diamonds: 5,
    currentTier: 1,
    unlockedPlants: [],
    ownedPlants: {}
};

let currentChamber = null;
let selectedPlants = {
    plant1: null,
    plant2: null
};

// Initialize breeding page
function initializeBreeding() {
    loadBreedingData();
    setupBreedingButtons();
}

// Load user data
function loadBreedingData() {
    let savedData = localStorage.getItem('habitGardenData');
    
    if (savedData) {
        let data = JSON.parse(savedData);
        userData.coins = data.coins || 0;
        userData.diamonds = data.diamonds || 5;
        userData.currentTier = data.currentTier || 1;
        
        // Get unlocked plants
        userData.unlockedPlants = [];
        for (let i = 1; i <= userData.currentTier; i++) {
            userData.unlockedPlants.push(plantTiers[i - 1]);
        }
        
        // Load owned plants count
        let savedOwned = localStorage.getItem('ownedPlants');
        if (savedOwned) {
            userData.ownedPlants = JSON.parse(savedOwned);
        }
    }
    
    updateCurrency();
}

// Update currency display
function updateCurrency() {
    let coinDisplay = document.querySelector('.coins');
    let diamondDisplay = document.querySelector('.diamonds');
    
    if (coinDisplay) coinDisplay.innerText = '🪙 ' + userData.coins;
    if (diamondDisplay) diamondDisplay.innerText = '💎 ' + userData.diamonds;
}

// Setup breeding buttons
function setupBreedingButtons() {
    let buttons = document.querySelectorAll('.start-breeding-btn');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let chamber = this.closest('.breeding-slot');
            openPlantSelector(chamber);
        });
    }
}

// Open plant selector modal
function openPlantSelector(chamber) {
    currentChamber = chamber;
    selectedPlants.plant1 = null;
    selectedPlants.plant2 = null;
    
    // Check if player has unlocked plants
    if (userData.unlockedPlants.length === 0) {
        alert('You need to unlock plants first! Complete habits on the Dashboard to unlock your first plant.');
        return;
    }
    
    // Create modal
    let modal = document.createElement('div');
    modal.className = 'plant-selector-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Select Plants to Breed</h3>
                <button class="close-modal" onclick="closePlantSelector()">✕</button>
            </div>
            <div class="modal-body">
                <div class="breeding-selection-info">
                    <p>Choose 2 plants to combine</p>
                    <div class="selected-display">
                        <div class="selected-slot" id="selected-slot-1">
                            <div class="empty-selected">Plant 1</div>
                        </div>
                        <div class="breeding-arrow">→</div>
                        <div class="selected-slot" id="selected-slot-2">
                            <div class="empty-selected">Plant 2</div>
                        </div>
                    </div>
                </div>
                
                <!-- Breeding Chances Display -->
                <div class="breeding-chances-preview" id="breeding-chances-preview" style="display: none;">
                    <h4>🔮 Possible Results</h4>
                    <div id="chances-list"></div>
                </div>
                
                <div class="plant-grid" id="plant-selector-grid">
                    ${generatePlantOptions()}
                </div>
                <div class="breed-action">
                    <button class="breed-now-btn" id="breed-now-btn" disabled>View Breeding Chances</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add click events to plant options
    let plantOptions = document.querySelectorAll('.plant-option');
    for (let i = 0; i < plantOptions.length; i++) {
        plantOptions[i].addEventListener('click', function() {
            let tier = parseInt(this.getAttribute('data-tier'));
            selectPlantForBreeding(tier);
        });
    }
    
    // Add breed button click
    let breedBtn = document.getElementById('breed-now-btn');
    if (breedBtn) {
        breedBtn.addEventListener('click', showBreedingChances);
    }
}

// Generate plant options HTML
function generatePlantOptions() {
    if (userData.unlockedPlants.length === 0) {
        return '<p class="no-plants">Complete habits to unlock plants!</p>';
    }
    
    let html = '';
    for (let i = 0; i < userData.unlockedPlants.length; i++) {
        let plant = userData.unlockedPlants[i];
        html += `
            <div class="plant-option" data-tier="${plant.tier}">
                <div class="plant-option-emoji">${plant.emoji}</div>
                <div class="plant-option-name">${plant.name}</div>
                <div class="plant-option-tier">Tier ${plant.tier}</div>
            </div>
        `;
    }
    return html;
}

// Select plant for breeding
function selectPlantForBreeding(tier) {
    let plant = plantTiers[tier - 1];
    
    if (!selectedPlants.plant1) {
        selectedPlants.plant1 = plant;
        updateSelectedDisplay(1, plant);
    } else if (!selectedPlants.plant2) {
        selectedPlants.plant2 = plant;
        updateSelectedDisplay(2, plant);
        
        // Enable breed button
        let breedBtn = document.getElementById('breed-now-btn');
        if (breedBtn) {
            breedBtn.disabled = false;
            breedBtn.innerText = 'View Breeding Chances';
        }
    } else {
        // Both slots full, replace plant 1
        selectedPlants.plant1 = plant;
        updateSelectedDisplay(1, plant);
    }
}

// Update selected display
function updateSelectedDisplay(slotNumber, plant) {
    let slot = document.getElementById('selected-slot-' + slotNumber);
    if (!slot) return;
    
    slot.innerHTML = `
        <div class="selected-plant">
            <div class="selected-emoji">${plant.emoji}
