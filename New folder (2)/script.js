(function() {
  // Enhanced travel recommendations data with two images each
  const recommendations = [
    // Beach recommendations with two images
    { 
      category: 'beach', 
      name: 'Bora Bora, French Polynesia', 
      description: 'Crystal clear lagoons and overwater bungalows. A true paradise on Earth.',
      images: [
        'https://images.unsplash.com/photo-1512453979798-5c252e2468d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514282402647-0f49bba825f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$$ (from $1,200)',
      duration: '7 days'
    },
    { 
      category: 'beach', 
      name: 'Whitehaven Beach, Australia', 
      description: 'Whitsunday Island – pure silica sand and turquoise water stretching for miles.',
      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$ (from $650)',
      duration: '5 days'
    },
    { 
      category: 'beach', 
      name: 'Maldives', 
      description: 'Picture-perfect atolls with pristine beaches and incredible marine life.',
      images: [
        'https://images.unsplash.com/photo-1514282402647-0f49bba825f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573843981270-5600c5f287f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$$$ (from $2,000)',
      duration: '7 days'
    },
    
    // Temple recommendations with two images
    { 
      category: 'temple', 
      name: 'Angkor Wat, Cambodia', 
      description: 'Majestic khmer temple complex, the largest religious monument in the world.',
      images: [
        'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1557479078-9e2d4d8f3e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$ (from $400)',
      duration: '4 days'
    },
    { 
      category: 'temple', 
      name: 'Bagan, Myanmar', 
      description: 'Thousands of ancient temples and pagodas scattered across the plains.',
      images: [
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1589884628622-79a2673b30e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$ (from $550)',
      duration: '5 days'
    },
    { 
      category: 'temple', 
      name: 'Borobudur, Indonesia', 
      description: 'The world\'s largest Buddhist temple, with stunning reliefs and sunrise views.',
      images: [
        'https://images.unsplash.com/photo-1583404437310-5249c8a2f0d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$ (from $480)',
      duration: '4 days'
    },
    
    // Country-based recommendations (Japan, Thailand, Italy) with two images each
    { 
      category: 'japan', 
      country: 'Japan',
      name: 'Tokyo, Japan', 
      description: 'Neon-lit skyscrapers, ancient temples, and the best sushi in the world.',
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$$ (from $1,300)',
      duration: '6 days'
    },
    { 
      category: 'japan', 
      country: 'Japan',
      name: 'Kyoto, Japan', 
      description: 'Geishas, bamboo groves, and golden pavilions – the cultural heart of Japan.',
      images: [
        'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$$$ (from $1,100)',
      duration: '5 days'
    },
    { 
      category: 'thailand', 
      country: 'Thailand',
      name: 'Phuket, Thailand', 
      description: 'Stunning beaches, vibrant nightlife, and beautiful island hopping.',
      images: [
        'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
    },
