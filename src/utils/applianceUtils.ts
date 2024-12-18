import { Product } from '../types';

export const applianceProducts: Product[] = [
  {
    id: 'appliance-1',
    name: 'Samsung Smart Fridge',
    description: 'Transform your kitchen with the Samsung Family Hub Refrigerator. This smart fridge features a built-in touchscreen that lets you manage your groceries, share family calendars, and even see inside your fridge remotely. The FlexZone drawer provides customizable temperature control, while the Twin Cooling Plus system maintains optimal humidity levels.',
    price: 2799.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 3,
    rating: 4.5,
    reviews: 56,
    specs: [
      { label: 'Capacity', value: '27 cu. ft.' },
      { label: 'Display', value: '21.5" Touchscreen' },
      { label: 'Ice Maker', value: 'Dual Ice Maker' },
      { label: 'Cooling', value: 'Twin Cooling Plus' },
      { label: 'Smart Features', value: 'Family Hub' },
      { label: 'Energy Star', value: 'Certified' }
    ]
  },
  {
    id: 'appliance-2',
    name: 'LG Front Load Washer',
    description: 'Experience smarter laundry with the LG AI Front Load Washer. The AI DD technology detects fabric texture and load size to choose the perfect wash motions. Steam+ technology removes allergens and wrinkles, while TurboWash 360° delivers a complete clean in under 30 minutes.',
    price: 999.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 6,
    rating: 4,
    reviews: 78,
    specs: [
      { label: 'Capacity', value: '4.5 cu. ft.' },
      { label: 'Technology', value: 'AI DD, TurboWash 360°' },
      { label: 'Steam', value: 'Steam+ Technology' },
      { label: 'Programs', value: '14 Wash Programs' },
      { label: 'Energy Star', value: 'Certified' },
      { label: 'Smart Features', value: 'SmartThinQ' }
    ]
  },
  {
    id: 'appliance-3',
    name: 'Dyson V15 Detect',
    description: 'Revolutionize your cleaning routine with the Dyson V15 Detect. The precisely-angled laser reveals microscopic dust, while the piezo sensor sizes and counts dust particles for scientific proof of a deep clean. The advanced filtration system captures 99.99% of particles, making it perfect for allergy sufferers.',
    price: 749.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 10,
    rating: 4.5,
    reviews: 123,
    specs: [
      { label: 'Runtime', value: 'Up to 60 minutes' },
      { label: 'Technology', value: 'Laser Dust Detection' },
      { label: 'Filtration', value: 'HEPA' },
      { label: 'Bin Capacity', value: '0.76L' },
      { label: 'Weight', value: '6.8 lbs' },
      { label: 'Display', value: 'LCD Screen' }
    ]
  },
  {
    id: 'appliance-4',
    name: 'KitchenAid Stand Mixer',
    description: 'The KitchenAid Professional 5 Plus Series Stand Mixer is a powerhouse in the kitchen. With its 5-quart capacity and 10 speeds, it handles everything from whipping cream to kneading bread dough. The bowl-lift design and professional attachments make it perfect for serious bakers and cooking enthusiasts.',
    price: 449.99,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80',
    stock: 8,
    rating: 5,
    reviews: 245,
    specs: [
      { label: 'Capacity', value: '5 Quart' },
      { label: 'Power', value: '450 Watts' },
      { label: 'Speeds', value: '10 Speed Settings' },
      { label: 'Design', value: 'Bowl-Lift' },
      { label: 'Attachments', value: '3 Standard + Hub' },
      { label: 'Material', value: 'Die-Cast Metal' }
    ]
  }
];