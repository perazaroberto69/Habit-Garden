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

// Load user data and update garden
function initializeGarden() {
    loadGardenData();
}

function loadGardenData() {
    // Get data from localStorage
    let savedData = localStorage.getItem('habitGardenData');
    
    if (savedData) {
        let userData = JSON.parse(savedData);
        
        // Update currency display
        updateCurrency(userData);
        
        // Update garden stats
        updateGardenStats(userData);
        
        // Unlock plants based on current tier
        unlockPlantsUpToTier(userData.currentTier || 1);
    }
}

function updateCurrency(userData) {
    let coinDisplay = document.querySelector('.coins');
    let diamondDisplay = document.querySelector('.diamonds');
    
    if (coinDisplay) {
        coinDisplay.innerText = '🪙 ' + (userData.coins || 0);
    }
    if (diamondDisplay) {
        diamondDisplay.innerText = '💎 ' + (userData.diamonds || 5);
    }
}

function updateGardenStats(userData) {
    let currentTier = userData.currentTier || 1;
    let totalPlants = userData.plantsCollected || 1;
    
    // Update summary
    let summary = document.getElementById('garden-summary');
    if (summary) {
        summary.innerText = totalPlants + ' plant' + (totalPlants > 1 ? 's' : '') + ' unlocked - ' + (50 - currentTier) + ' mysteries remain!';
    }
    
    // Update stats
    let growingCount = document.getElementById('growing-count');
    let bloomingCount = document.getElementById('blooming-count');
    let matureCount = document.getElementById('mature-count');
    
    if (growingCount) growingCount.innerText = Math.min(currentTier, 10) + ' Growing';
    if (bloomingCount) bloomingCount.innerText = Math.max(0, Math.min(currentTier - 10, 20)) + ' Blooming';
    if (matureCount) matureCount.innerText = Math.max(0, currentTier - 30) + ' Mature';
}

function unlockPlantsUpToTier(currentTier) {
    // Get all plant slots
    let plantSlots = document.querySelectorAll('.plant-slot');
    
    let slotIndex = 0;
    
    // Skip tier headers and unlock plants
    for (let i = 0; i < plantSlots.length; i++) {
        let slot = plantSlots[i];
        
        // Skip if it's already unlocked (tier 1)
        if (!slot.classList.contains('locked')) {
            slotIndex++;
            continue;
        }
        
        slotIndex++;
        
        // Check if this plant should be unlocked
        if (slotIndex <= currentTier) {
            unlockPlant(slot, slotIndex);
        }
    }
}

function unlockPlant(slot, tierNumber) {
    // Get plant data
    let plant = plantTiers[tierNumber - 1];
    
    if (!plant) return;
    
    // Remove locked styling
    slot.classList.remove('locked');
    
    // Add tier styling
    if (tierNumber <= 10) {
        slot.classList.add('tier-' + tierNumber);
    } else if (tierNumber <= 20) {
        slot.classList.add('mystical');
    } else if (tierNumber <= 30) {
        slot.classList.add('quantum');
    } else if (tierNumber <= 40) {
        slot.classList.add('digital');
    } else if (tierNumber <= 49) {
        slot.classList.add('legendary');
    } else {
        slot.classList.add('finale');
    }
    
    // Update the plant display
    let plantInfo = slot.querySelector('.plant-info h4');
    let tierBadge = slot.querySelector('.tier-badge');
    
    if (plantInfo) {
        plantInfo.innerText = plant.name;
    }
    
    if (tierBadge) {
        tierBadge.classList.remove('locked');
    }
    
    // Add health bar if not exists
    let healthBar = slot.querySelector('.plant-health');
    if (!healthBar) {
        let plantInfoDiv = slot.querySelector('.plant-info');
        let healthHTML = `
            <div class="plant-health">
                <div class="health-bar">
                    <div class="health-progress" style="width: 100%"></div>
                </div>
                <span class="health-text">100% Healthy</span>
            </div>
        `;
        plantInfoDiv.innerHTML += healthHTML;
    }
    
    // Remove unlock hint
    let unlockHint = slot.querySelector('.unlock-hint');
    if (unlockHint) {
        unlockHint.remove();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGarden();
});
