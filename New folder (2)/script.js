(function() {
  // Mock travel recommendations data
  const mockRecommendations = [
    { 
      category: 'beach', 
      name: 'Bora Bora', 
      description: 'Crystal clear lagoons and overwater bungalows. A true paradise.', 
      price: '$$$ (from $1,200)' 
    },
    { 
      category: 'beach', 
      name: 'Whitehaven Beach', 
      description: 'Whitsunday Island – pure silica sand and turquoise water.', 
      price: '$$ (from $650)' 
    },
    { 
      category: 'temple', 
      name: 'Angkor Wat', 
      description: 'Majestic khmer temple complex in Cambodia, sunrise views.', 
      price: '$$ (from $400)' 
    },
    { 
      category: 'temple', 
      name: 'Bagan', 
      description: 'Thousands of ancient temples and pagodas in Myanmar.', 
      price: '$$ (from $550)' 
    },
    { 
      category: 'japan', 
      name: 'Kyoto', 
      description: 'Geishas, bamboo groves, and golden pavilions – cultural heart of Japan.', 
      price: '$$$ (from $1,100)' 
    },
    { 
      category: 'japan', 
      name: 'Tokyo', 
      description: 'Neon, tradition, and incredible food – a metropolis like no other.', 
      price: '$$$ (from $1,300)' 
    },
    { 
      category: 'adventure', 
      name: 'Patagonia', 
      description: 'Towering peaks, glaciers, and wild hiking trails.', 
      price: '$$$ (from $1,500)' 
    },
    { 
      category: 'culture', 
      name: 'Marrakech', 
      description: 'Souks, palaces, and vibrant colours – immerse in Moroccan culture.', 
      price: '$$ (from $700)' 
    },
    { 
      category: 'culture', 
      name: 'Cusco', 
      description: 'Ancient Inca capital, gateway to Machu Picchu.', 
      price: '$$ (from $680)' 
    }
  ];

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resultsPanel = document.getElementById('resultsPanel');
  const resultsList = document.getElementById('resultsList');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const closeResultsBtn = document.getElementById('closeResultsBtn');
  const bookNowBtn = document.getElementById('bookNowBtn');
  
  // Navigation links
  const homeLink = document.getElementById('home-link');
  const aboutLink = document.getElementById('about-link');
  const contactLink = document.getElementById('contact-link');

  // Event Listeners for Navigation
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🏠 Home page – you are already here!');
  });

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📖 About TravelBloom: We craft authentic journeys since 2025.');
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📧 Contact us: hello@travelbloom.com | 🗺️ 24/7 support');
  });

  // Book Now button
  bookNowBtn.addEventListener('click', () => {
    alert('✨ Book now feature – choose your adventure! (demo)');
  });

  // Filter destinations based on keyword
  function filterDestinations(keyword) {
    if (!keyword.trim()) return [];
    const lowerKeyword = keyword.toLowerCase().trim();
    
    return mockRecommendations.filter(item => 
      item.category.includes(lowerKeyword) || 
      item.name.toLowerCase().includes(lowerKeyword) ||
      item.description.toLowerCase().includes(lowerKeyword)
    );
  }

  // Render search results
  function renderResults(results) {
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
      noResultsMsg.style.display = 'block';
    } else {
      noResultsMsg.style.display = 'none';
      results.forEach(r => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'result-item';
        itemDiv.innerHTML = `
          <h3>📍 ${r.name}</h3>
          <p>${r.description}</p>
          <span class="price">${r.price}</span>
        `;
        resultsList.appendChild(itemDiv);
      });
    }
  }

  // Perform search and show results
  function performSearch() {
    const query = searchInput.value;
    const results = filterDestinations(query);
    renderResults(results);
    resultsPanel.classList.add('show');
  }

  // Search button click
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch();
  });

  // Enter key in input
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });

  // Clear button
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    resultsList.innerHTML = '';
    noResultsMsg.style.display = 'none';
    resultsPanel.classList.remove('show');
  });

  // Close results panel
  closeResultsBtn.addEventListener('click', () => {
    resultsPanel.classList.remove('show');
  });

  // Fetch API demonstration (simulated)
  window.fetchMock = function() {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockRecommendations), 200);
    });
  };



  // Optional: Close panel when clicking outside (advanced)
  document.addEventListener('click', (e) => {
    if (resultsPanel.classList.contains('show') && 
        !resultsPanel.contains(e.target) && 
        !searchBtn.contains(e.target) && 
        !searchInput.contains(e.target)) {
      resultsPanel.classList.remove('show');
    }
  });
})();