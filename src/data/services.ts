export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'junk-removal',
    name: 'Junk & Debris\nRemoval',
    description: 'Fast, reliable removal of unwanted furniture, appliances, construction debris, yard waste, and general clutter.',
    features: ['Same-day & next-day service', 'Eco-friendly recycling & donation', 'Heavy lifting included', 'Fair upfront pricing']
  },
  {
    id: 'cleanouts',
    name: 'House & Garage\nCleanouts',
    description: 'Complete full-property, estate, attic, basement, and garage cleanout solutions tailored to your schedule.',
    features: ['Estate & foreclosures', 'Garage & storage units', 'Thorough sweep-up after work', 'Respectful & careful handling']
  },
  {
    id: 'yard-cleanup',
    name: 'Yard Cleanup',
    description: 'Transform overgrown landscapes, remove fallen branches, trimmings, green waste, and restore curb appeal.',
    features: ['Brush & branch clearing', 'Leaf & lawn debris removal', 'Seasonal property cleanup', 'Organic waste disposal']
  },
  {
    id: 'small-repairs',
    name: 'Small Repairs',
    description: 'Handyman fixes for drywalls, fences, gates, doors, deck boards, fixtures, and routine property maintenance.',
    features: ['Fence & gate fixes', 'Drywall patch & touch-up', 'Hardware & fixture installs', 'Quality craftsmanship']
  },
  {
    id: 'pressure-washing',
    name: 'Pressure\nWashing',
    description: 'High-power washing for driveways, patios, siding, sidewalks, fences, and outdoor surfaces to eliminate grime.',
    features: ['Driveways & sidewalks', 'Decks, patios & pavers', 'Exterior walls & gutters', 'Deep stain removal']
  },
  {
    id: 'painting',
    name: 'Painting',
    description: 'Professional interior and exterior touch-up and full painting services to rejuvenate your home or rental property.',
    features: ['Interior walls & ceilings', 'Exterior trim & siding', 'Fence & deck staining', 'Surface prep & clean lines']
  },
  {
    id: 'moving-help',
    name: 'Moving Help',
    description: 'Reliable muscle and equipment for loading, unloading trucks, moving heavy items, and intra-property relocation.',
    features: ['Loading & unloading pods/trucks', 'Heavy furniture repositioning', 'Careful padding & straps', 'Dependable crew']
  },
  {
    id: 'hauling-delivery',
    name: 'Hauling &\nDelivery',
    description: 'Pickup and transport of retail purchases, appliances, bulk landscape supplies, building materials, and more.',
    features: ['Store pickups (Home Depot, IKEA, etc.)', 'Landscape rock, soil & mulch', 'Appliance transportation', 'Direct door-to-door']
  }
];
