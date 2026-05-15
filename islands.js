// Plant tier data - must match script.js
let plantTiers = [
    { tier: 1, name: 'Tiny Seedling', emoji: '🌱', coinsPerHour: 5 },
    { tier: 2, name: 'Baby Sprout', emoji: '🌿', coinsPerHour: 8 },
    { tier: 3, name: 'Young Fern', emoji: '🍀', coinsPerHour: 12 },
    { tier: 4, name: 'Growing Plant', emoji: '🌻', coinsPerHour: 15 },
    { tier: 5, name: 'Blooming Flower', emoji: '🌷', coinsPerHour: 20 },
    { tier: 6, name: 'Forest Guardian', emoji: '🌳', coinsPerHour: 25 },
    { tier: 7, name: 'Ancient Oak', emoji: '🌲', coinsPerHour: 35 },
    { tier: 8, name: 'Mystic Rose', emoji: '🌺', coinsPerHour: 45 },
    { tier: 9, name: 'Golden Tree', emoji: '🍄', coinsPerHour: 50 },
    { tier: 10, name: 'Crystal Blossom', emoji: '💎', coinsPerHour: 60 },
    { tier: 11, name: 'Phoenix Flower', emoji: '🔥', coinsPerHour: 75 },
    { tier: 12, name: 'Star Tree', emoji: '⭐', coinsPerHour: 90 },
    { tier: 13, name: 'Galaxy Blossom', emoji: '🌌', coinsPerHour: 110 },
    { tier: 14, name: 'Cosmic Tree', emoji: '🪐', coinsPerHour: 130 },
    { tier: 15, name: 'Universe Flower', emoji: '🌟', coinsPerHour: 150 },
    { tier: 16, name: 'Divine Lotus', emoji: '🪷', coinsPerHour: 180 },
    { tier: 17, name: 'Celestial Vine', emoji: '🌙', coinsPerHour: 210 },
    { tier: 18, name: 'Rainbow Orchid', emoji: '🌈', coinsPerHour: 250 },
    { tier: 19, name: 'Thunder Blossom', emoji: '⚡', coinsPerHour: 290 },
    { tier: 20, name: 'Solar Sunflower', emoji: '☀️', coinsPerHour: 350 },
    { tier: 21, name: 'Quantum Rose', emoji: '🔬', coinsPerHour: 420 },
    { tier: 22, name: 'Time Tree', emoji: '⏰', coinsPerHour: 500 },
    { tier: 23, name: 'Infinity Bloom', emoji: '♾️', coinsPerHour: 600 },
    { tier: 24, name: 'Omega Plant', emoji: '🛸', coinsPerHour: 720 },
    { tier: 25, name: 'Genesis Tree', emoji: '👑', coinsPerHour: 850 },
    { tier: 26, name: 'Void Blossom', emoji: '🕳️', coinsPerHour: 1000 },
    { tier: 27, name: 'Reality Flower', emoji: '🎭', coinsPerHour: 1200 },
    { tier: 28, name: 'Dimension Tree', emoji: '🌀', coinsPerHour: 1450 },
    { tier: 29, name: 'Eternal Bloom', emoji: '⚰️', coinsPerHour: 1750 },
    { tier: 30, name: 'Absolute Rose', emoji: '🏆', coinsPerHour: 2100 },
    { tier: 31, name: 'Nexus Flower', emoji: '🔮', coinsPerHour: 2500 },
    { tier: 32, name: 'Matrix Tree', emoji: '💻', coinsPerHour: 3000 },
    { tier: 33, name: 'Hologram Bloom', emoji: '👻', coinsPerHour: 3600 },
    { tier: 34, name: 'Data Vine', emoji: '📊', coinsPerHour: 4300 },
    { tier: 35, name: 'Code Blossom', emoji: '💾', coinsPerHour: 5100 },
    { tier: 36, name: 'Binary Tree', emoji: '🤖', coinsPerHour: 6000 },
    { tier: 37, name: 'Neural Flower', emoji: '🧠', coinsPerHour: 7000 },
    { tier: 38, name: 'AI Garden', emoji: '🤯', coinsPerHour: 8200 },
    { tier: 39, name: 'Cyber Rose', emoji: '⚙️', coinsPerHour: 9500 },
    { tier: 40, name: 'Digital God Tree', emoji: '🖥️', coinsPerHour: 11000 },
    { tier: 41, name: 'Mythic Bloom', emoji: '🐉', coinsPerHour: 13000 },
    { tier: 42, name: 'Ancient Power', emoji: '⚔️', coinsPerHour: 15500 },
    { tier: 43, name: 'Titan Flower', emoji: '🗿', coinsPerHour: 18500 },
    { tier: 44, name: 'Primordial Tree', emoji: '🌋', coinsPerHour: 22000 },
    { tier: 45, name: 'Creator Blossom', emoji: '🎨', coinsPerHour: 26000 },
    { tier: 46, name: 'Universe Maker', emoji: '🌍', coinsPerHour: 31000 },
    { tier: 47, name: 'Reality Shaper', emoji: '🔨', coinsPerHour: 37000 },
    { tier: 48, name: 'Existence Master', emoji: '👁️', coinsPerHour: 44000 },
    { tier: 49, name: 'Omnipotent Bloom', emoji: '🔱', coinsPerHour: 52000 },
    { tier: 50, name: 'ETERNAL GARDEN EMPEROR', emoji: '🎆', coinsPerHour: 100000 }
];

// Island data
let islands = [
    { id: 'starter', name: 'Starter Grove', slots: 6, cost: 0, costType: 'coins', bonus: 0, unlocked: true },
    { id: 'meadow', name: 'Forest Meadow', slots: 8, cost: 500, costType: 'coins', bonus: 10, unlocked: false },
    { id: 'sanctuary', name: 'Mystic Sanctuary', slots: 10, cost: 1500, costType: 'coins', bonus: 25, unlocked: false },
    { id: 'mountain', name: 'Mountain Peak', slots: 12, cost: 3000, costType: 'coins', bonus: 40, unlocked: false },
    { id: 'lake', name: 'Floating Lake', slots: 15, cost: 5000, costType: 'coins', bonus: 50, unlocked: false },
    { id: 'moonlit', name: 'Moonlit Sanctuary', slots: 20, cost: 15, costType: 'diamonds', bonus: 75, unlocked: false },
    { id: 'volcanic', name: 'Volcanic Island', slots: 25, cost: 25, costType: 'diamonds', bonus: 100, unlocked: false },
    { id: 'paradise', name: 'Paradise Dimension', slots: 30, cost: 50, costType: 'diamonds', bonus: 150, unlocked: false }
];

let userData = {
    coins: 0,
    diamonds: 5,
    currentTier: 1,
    unlockedPlants: [],
    islandSlots: {},
    unlockedIslands: ['starter']
};

let selectedSlot = null;

// Setup purchase button clicks
function setupPurchaseButtons() {
    let purchaseButtons = document.querySelectorAll('.purchase-btn');
    
    for (let i = 0; i < purchaseButtons.length; i++) {
        purchaseButtons[i].addEventListener('click', function() {
            let islandCard = this.closest('.island-card.purchasable, .island-card.premium-purchasable');
            purchaseIsland(islandCard);
        });
    }
}

// Purchase an island
function purchaseIsland(islandCard) {
    // Get island info from the card
    let islandName = islandCard.querySelector('h4').innerText;
    let priceElement = islandCard.querySelector('.island-price').innerText;
    
    // Find matching island
    let island = null;
    for (let i = 0; i < islands.length; i++) {
        if (islandName.includes(islands[i].name)) {
            island = islands[i];
            break;
        }
    }
    
    if (!island) return;
    
    // Check if already unlocked
    if (userData.unlockedIslands.indexOf(island.id) !== -1) {
        alert('You already own this island!');
        return;
    }
    
    // Check if player has enough currency
    if (island.costType === 'coins') {
        if (userData.coins < island.cost) {
            alert('Not enough coins! You need ' + island.cost + ' coins.');
            return;
        }
        userData.coins -= island.cost;
    } else {
        if (userData.diamonds < island.cost) {
            alert('Not enough diamonds! You need ' + island.cost + ' diamonds.');
            return;
        }
        userData.diamonds -= island.cost;
    }
    
    // Unlock the island
    userData.unlockedIslands.push(island.id);
    island.unlocked = true;
    
    // Update displays
    updateCurrency();
    saveIslandData();
    
    // Show success message
    alert('🎉 Congratulations! You purchased ' + island.name + '!\n\n' + island.slots + ' plant slots available\n+' + island.bonus + '% income bonus!');
    
    // Replace purchase button with island slots
    let islandHTML = generateIslandSlots(island);
    islandCard.classList.remove('purchasable', 'premium-purchasable');
    islandCard.classList.add('active');
    islandCard.innerHTML = `
        <div class="island-header">
            <h4>${getIslandEmoji(island.id)} ${island.name}</h4>
            <div class="island-income">+0 coins/hr</div>
        </div>
        <div class="island-plants">
            ${islandHTML}
        </div>
        <div class="island-status">0/${island.slots} slots filled • Place your plants!</div>
    `;
    
    // Setup clicks for new slots
    setupSlotClicksForIsland(islandCard);
}

// Generate island slots HTML
function generateIslandSlots(island) {
    let html = '';
    for (let i = 0; i < island.slots; i++) {
        let slotId = island.id + '-slot-' + (i + 1);
        html += `
            <div class="plant-slot empty" data-slot-id="${slotId}">
                <div class="empty-slot">+</div>
                <div class="slot-hint">Empty</div>
            </div>
        `;
    }
    return html;
}

// Get island emoji
function getIslandEmoji(islandId) {
    let emojis = {
        'starter': '🏝️',
        'meadow': '🌸',
        'sanctuary': '✨',
        'mountain': '🏔️',
        'lake': '🌊',
        'moonlit': '🌙',
        'volcanic': '🌋',
        'paradise': '🎆'
    };
    return emojis[islandId] || '🏝️';
}

// Setup slot clicks for a specific island
function setupSlotClicksForIsland(islandCard) {
    let slots = islandCard.querySelectorAll('.plant-slot.empty');
    
    for (let i = 0; i < slots.length; i++) {
        slots[i].addEventListener('click', function() {
            openPlantSelector(this);
        });
    }
}

// Load unlocked islands on page load
function loadUnlockedIslands() {
    for (let i = 0; i < islands.length; i++) {
        let island = islands[i];
        
        if (userData.unlockedIslands.indexOf(island.id) !== -1 && island.id !== 'starter') {
            island.unlocked = true;
            
            // Find the island card and update it
            let islandCards = document.querySelectorAll('.island-card.purchasable, .island-card.premium-purchasable');
            for (let j = 0; j < islandCards.length; j++) {
                let cardName = islandCards[j].querySelector('h4').innerText;
                if (cardName.includes(island.name)) {
                    islandCards[j].classList.remove('purchasable', 'premium-purchasable');
                    islandCards[j].classList.add('active');
                    
                    let islandHTML = generateIslandSlots(island);
                    islandCards[j].innerHTML = `
                        <div class="island-header">
                            <h4>${getIslandEmoji(island.id)} ${island.name}</h4>
                            <div class="island-income">+0 coins/hr</div>
                        </div>
                        <div class="island-plants">
                            ${islandHTML}
                        </div>
                        <div class="island-status">0/${island.slots} slots filled • Place your plants!</div>
                    `;
                    
                    setupSlotClicksForIsland(islandCards[j]);
                    break;
                }
            }
        }
    }
}

// Initialize islands page
function initializeIslands() {
    loadIslandData();
    setupSlotClicks();
    setupPurchaseButtons();
}

// Load user data
function loadIslandData() {
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
        
        // Load island slots from localStorage
        let savedSlots = localStorage.getItem('islandSlots');
        if (savedSlots) {
            userData.islandSlots = JSON.parse(savedSlots);
        }
        
        // Load unlocked islands
        let savedIslands = localStorage.getItem('unlockedIslands');
        if (savedIslands) {
            userData.unlockedIslands = JSON.parse(savedIslands);
        } else {
            userData.unlockedIslands = ['starter'];
        }
    }
    
    updateCurrency();
    loadUnlockedIslands();
    loadPlacedPlants();
    updateTotalIncome();
}

// Update currency display
function updateCurrency() {
    let coinDisplay = document.querySelector('.coins');
    let diamondDisplay = document.querySelector('.diamonds');
    
    if (coinDisplay) coinDisplay.innerText = '🪙 ' + userData.coins;
    if (diamondDisplay) diamondDisplay.innerText = '💎 ' + userData.diamonds;
}

// Setup slot clicks
function setupSlotClicks() {
    let slots = document.querySelectorAll('.plant-slot.empty');
    
    for (let i = 0; i < slots.length; i++) {
        slots[i].addEventListener('click', function() {
            openPlantSelector(this);
        });
    }
}

// Open plant selector modal
function openPlantSelector(slot) {
    selectedSlot = slot;
    
    // Create modal
    let modal = document.createElement('div');
    modal.className = 'plant-selector-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Select a Plant</h3>
                <button class="close-modal" onclick="closePlantSelector()">✕</button>
            </div>
            <div class="modal-body">
                <div class="plant-grid" id="plant-selector-grid">
                    ${generatePlantOptions()}
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
            placePlantOnSlot(tier);
        });
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
                <div class="plant-option-earnings">+${plant.coinsPerHour}/hr</div>
            </div>
        `;
    }
    return html;
}

// Place plant on slot
function placePlantOnSlot(tier) {
    if (!selectedSlot) return;
    
    // Check if this plant is already placed on this island
    let isPlantAlreadyPlaced = false;
    for (let slotId in userData.islandSlots) {
        if (userData.islandSlots[slotId].tier === tier) {
            isPlantAlreadyPlaced = true;
            break;
        }
    }
    
    if (isPlantAlreadyPlaced) {
        alert('This plant is already placed on this island! Each plant can only be placed once per island.');
        closePlantSelector();
        return;
    }
    
    let plant = plantTiers[tier - 1];
    
    // Get slot ID
    let slotId = selectedSlot.getAttribute('data-slot-id');
    if (!slotId) {
        slotId = 'slot-' + Date.now();
        selectedSlot.setAttribute('data-slot-id', slotId);
    }
    
    // Update slot appearance
    selectedSlot.classList.remove('empty');
    selectedSlot.classList.add('occupied');
    selectedSlot.innerHTML = `
        <div class="plant-icon">${plant.emoji}</div>
        <div class="plant-earnings">+${plant.coinsPerHour}/hr</div>
        <button class="remove-plant" onclick="removePlant('${slotId}', event)">✕</button>
    `;
    
    // Save to island slots
    userData.islandSlots[slotId] = {
        tier: tier,
        emoji: plant.emoji,
        name: plant.name,
        coinsPerHour: plant.coinsPerHour
    };
    
    saveIslandData();
    updateTotalIncome();
    closePlantSelector();
}

// Remove plant from slot
function removePlant(slotId, event) {
    // Stop the click from triggering the slot click
    if (event) {
        event.stopPropagation();
    }
    
    let slot = document.querySelector('[data-slot-id="' + slotId + '"]');
    if (!slot) return;
    
    // Reset slot
    slot.classList.remove('occupied');
    slot.classList.add('empty');
    slot.innerHTML = `
        <div class="empty-slot">+</div>
        <div class="slot-hint">Empty</div>
    `;
    
    // Remove from data
    delete userData.islandSlots[slotId];
    
    // Re-add click event
    slot.addEventListener('click', function() {
        openPlantSelector(this);
    });
    
    saveIslandData();
    updateTotalIncome();
}

// Load placed plants on page load
function loadPlacedPlants() {
    for (let slotId in userData.islandSlots) {
        let plantData = userData.islandSlots[slotId];
        let slot = document.querySelector('[data-slot-id="' + slotId + '"]');
        
        if (slot) {
            slot.classList.remove('empty');
            slot.classList.add('occupied');
            slot.innerHTML = `
                <div class="plant-icon">${plantData.emoji}</div>
                <div class="plant-earnings">+${plantData.coinsPerHour}/hr</div>
                <button class="remove-plant" onclick="removePlant('${slotId}', event)">✕</button>
            `;
        }
    }
}

// Update total income
function updateTotalIncome() {
    let totalIncome = 0;
    let plantCount = 0;
    
    for (let slotId in userData.islandSlots) {
        totalIncome += userData.islandSlots[slotId].coinsPerHour;
        plantCount++;
    }
    
    let incomeAmount = document.querySelector('.income-amount');
    let incomeDetail = document.querySelector('.income-detail');
    let islandIncome = document.querySelector('.island-income');
    let islandStatus = document.querySelector('.island-status');
    
    if (incomeAmount) {
        incomeAmount.innerText = '+' + totalIncome + ' coins/hour';
    }
    
    if (incomeDetail) {
        if (plantCount === 0) {
            incomeDetail.innerText = 'Place plants on islands to earn!';
        } else {
            incomeDetail.innerText = 'From ' + plantCount + ' income-generating plant' + (plantCount > 1 ? 's' : '');
        }
    }
    
    if (islandIncome) {
        islandIncome.innerText = '+' + totalIncome + ' coins/hr';
    }
    
    if (islandStatus) {
        islandStatus.innerText = plantCount + '/6 slots filled' + (plantCount === 0 ? ' • Place your first plant!' : '');
    }
}

// Close plant selector
function closePlantSelector() {
    let modal = document.querySelector('.plant-selector-modal');
    if (modal) {
        modal.remove();
    }
    selectedSlot = null;
}

// Save island data
function saveIslandData() {
    localStorage.setItem('islandSlots', JSON.stringify(userData.islandSlots));
    localStorage.setItem('unlockedIslands', JSON.stringify(userData.unlockedIslands));
    
    // Also update main userData
    let savedData = localStorage.getItem('habitGardenData');
    if (savedData) {
        let data = JSON.parse(savedData);
        data.coins = userData.coins;
        data.diamonds = userData.diamonds;
        localStorage.setItem('habitGardenData', JSON.stringify(data));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeIslands();
});

