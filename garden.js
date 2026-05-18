// Plant tier data - must match script.js and breeding.js
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

let userData = {
    coins: 0,
    diamonds: 5,
    currentTier: 1,
    ownedPlants: {}
};

// Load user data and update garden
function initializeGarden() {
    loadGardenData();
}

function loadGardenData() {
    // Get data from localStorage
    let savedData = localStorage.getItem('habitGardenData');
    
    if (savedData) {
        let data = JSON.parse(savedData);
        userData.coins = data.coins || 0;
        userData.diamonds = data.diamonds || 5;
        userData.currentTier = data.currentTier || 1;
        
        // Load owned plants
        let savedOwned = localStorage.getItem('ownedPlants');
        if (savedOwned) {
            userData.ownedPlants = JSON.parse(savedOwned);
        }
        
        // Update currency display
        updateCurrency();
        
        // Update garden stats
        updateGardenStats();
        
        // Display plants
        displayRegularPlants();
        displayHybridPlants();
    }
}

function loadGardenData() {
    // Get data from localStorage
    let savedData = localStorage.getItem('habitGardenData');
    
    if (savedData) {
        let data = JSON.parse(savedData);
        userData.coins = data.coins || 0;
        userData.diamonds = data.diamonds || 5;
        userData.currentTier = data.currentTier || 1;
        
        // Load owned plants
        let savedOwned = localStorage.getItem('ownedPlants');
        if (savedOwned) {
            userData.ownedPlants = JSON.parse(savedOwned);
        }
        
        // DEBUG: Log what we loaded
        console.log('Current Tier:', userData.currentTier);
        console.log('Owned Plants:', userData.ownedPlants);
        
        // Update currency display
        updateCurrency();
        
        // Update garden stats
        updateGardenStats();
        
        // Display plants
        displayRegularPlants();
        displayHybridPlants();
    }
}


function updateCurrency() {
    let coinDisplay = document.querySelector('.coins');
    let diamondDisplay = document.querySelector('.diamonds');
    
    if (coinDisplay) {
        coinDisplay.innerText = '🪙 ' + userData.coins;
    }
    if (diamondDisplay) {
        diamondDisplay.innerText = '💎 ' + userData.diamonds;
    }
}

function updateGardenStats() {
    let currentTier = userData.currentTier;
    let totalRegularPlants = currentTier;
    
    // Count hybrid plants
    let hybridCount = 0;
    for (let i = 0; i < hybridPlants.length; i++) {
        let hybrid = hybridPlants[i];
        let plantKey = hybrid.name.toLowerCase().replace(/\s+/g, '_');
        if (userData.ownedPlants[plantKey] && userData.ownedPlants[plantKey] > 0) {
            hybridCount++;
        }
    }
    
    let totalPlants = totalRegularPlants + hybridCount;
    
    // Update summary
    let summary = document.getElementById('garden-summary');
    if (summary) {
        summary.innerText = totalPlants + ' plant' + (totalPlants !== 1 ? 's' : '') + ' in your collection';
    }
    
    // Update stats
    let growingCount = document.getElementById('growing-count');
    let bloomingCount = document.getElementById('blooming-count');
    let matureCount = document.getElementById('mature-count');
    let hybridCountDisplay = document.getElementById('hybrid-count');
    
    if (growingCount) growingCount.innerText = Math.min(currentTier, 10) + ' Growing';
    if (bloomingCount) bloomingCount.innerText = Math.max(0, Math.min(currentTier - 10, 20)) + ' Blooming';
    if (matureCount) matureCount.innerText = Math.max(0, currentTier - 30) + ' Mature';
    if (hybridCountDisplay) hybridCountDisplay.innerText = hybridCount + ' Hybrid' + (hybridCount !== 1 ? 's' : '');
}

// Display regular plants
function displayRegularPlants() {
    let grid = document.getElementById('regular-plants-grid');
    if (!grid) return;
    
    let html = '';
    
    for (let i = 0; i < plantTiers.length; i++) {
        let plant = plantTiers[i];
        let isUnlocked = plant.tier <= userData.currentTier;
        let plantKey = plant.name.toLowerCase().replace(/\s+/g, '_');
        let count = userData.ownedPlants[plantKey] || 0;
        
        html += `
            <div class="plant-slot ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="plant-display">
                    <div class="plant-emoji">${isUnlocked ? plant.emoji : '❓'}</div>
                    <div class="plant-info">
                        <h4>${isUnlocked ? plant.name : '???'}</h4>
                        <div class="tier-badge ${isUnlocked ? '' : 'locked'}">Tier ${plant.tier}</div>
                        ${isUnlocked && count > 0 ? '<div class="plant-count">×' + count + '</div>' : ''}
                        ${!isUnlocked ? '<div class="unlock-hint">Unlock by reaching Tier ' + plant.tier + '</div>' : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

// Display hybrid plants
function displayHybridPlants() {
    // Categorize hybrids by rarity
    let commonHybrids = [];
    let rareHybrids = [];
    let epicHybrids = [];
    let legendaryHybrids = [];
    
    for (let i = 0; i < hybridPlants.length; i++) {
        let hybrid = hybridPlants[i];
        if (hybrid.tier <= 10) {
            commonHybrids.push(hybrid);
        } else if (hybrid.tier <= 25) {
            rareHybrids.push(hybrid);
        } else if (hybrid.tier <= 40) {
            epicHybrids.push(hybrid);
        } else {
            legendaryHybrids.push(hybrid);
        }
    }
    
    // Display each rarity category
    displayHybridCategory('common-hybrids-grid', commonHybrids);
    displayHybridCategory('rare-hybrids-grid', rareHybrids);
    displayHybridCategory('epic-hybrids-grid', epicHybrids);
    displayHybridCategory('legendary-hybrids-grid', legendaryHybrids);
}

// Display hybrid category
function displayHybridCategory(gridId, hybrids) {
    let grid = document.getElementById(gridId);
    if (!grid) return;
    
    let html = '';
    
    for (let i = 0; i < hybrids.length; i++) {
        let hybrid = hybrids[i];
        let plantKey = hybrid.name.toLowerCase().replace(/\s+/g, '_');
        let count = userData.ownedPlants[plantKey] || 0;
        let isDiscovered = count > 0;
        
        // Get parent names
        let parent1 = plantTiers[hybrid.parents[0] - 1];
        let parent2 = plantTiers[hybrid.parents[1] - 1];
        
        html += `
            <div class="plant-slot hybrid ${isDiscovered ? 'discovered' : 'locked'}">
                <div class="plant-display">
                    <div class="plant-emoji">${isDiscovered ? hybrid.emoji : '❓'}</div>
                    <div class="plant-info">
                        <h4>${isDiscovered ? hybrid.name : '???'}</h4>
                        <div class="tier-badge hybrid ${isDiscovered ? '' : 'locked'}">Tier ${hybrid.tier}</div>
                        ${isDiscovered && count > 0 ? '<div class="plant-count hybrid">×' + count + '</div>' : ''}
                        <div class="breeding-recipe ${isDiscovered ? '' : 'hidden-recipe'}">
                            ${isDiscovered ? 
                                parent1.emoji + ' + ' + parent2.emoji : 
                                '🧪 Breed to discover'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (html === '') {
        html = '<p class="no-hybrids">No hybrids in this rarity tier yet!</p>';
    }
    
    grid.innerHTML = html;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGarden();
});

