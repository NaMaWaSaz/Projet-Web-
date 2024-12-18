export const categoryInfo = {
  computers: {
    title: 'Desktop Computers',
    description: 'From gaming rigs to workstations, find the perfect desktop computer.',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  laptops: {
    title: 'Laptops',
    description: 'Powerful laptops for work, gaming, and everyday use.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  components: {
    title: 'PC Components',
    description: 'Build or upgrade your PC with premium components.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  tvs: {
    title: 'TVs & Displays',
    description: 'Experience stunning visuals with our range of TVs and displays.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  appliances: {
    title: 'Home Appliances',
    description: 'Smart appliances for a modern home.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
} as const;

export type CategoryType = keyof typeof categoryInfo;