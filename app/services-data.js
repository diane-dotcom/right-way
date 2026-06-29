export const services = [
  {
    slug: 'pest-control',
    title: 'Pest Control',
    shortTitle: 'Pest Control',
    image: '/assets/pest-control.jpg',
    description:
      'Keep ants, spiders, roaches, and other unwanted pests out of your home with reliable treatments and proactive protection.',
    eyebrow: 'Reliable pest protection',
    heading: 'This Pest Control Done the Right Way',
    intro:
      'RightWay helps Northeast Florida homeowners protect their homes from ants, roaches, spiders, and everyday pest pressure with dependable treatments and clear communication.',
    bullets: ['Interior and exterior pest treatments', 'Ant, roach, spider, and general pest help', 'Preventive plans built for Florida homes'],
    process: [
      { title: 'Inspection', copy: 'We inspect the area and identify pest activity, entry points, and risk zones.' },
      { title: 'Treatment', copy: 'We apply targeted treatments using safe, effective methods for your home.' },
      { title: 'Monitoring', copy: 'We monitor results and adjust service if pests continue showing up.' },
      { title: 'Prevention', copy: 'We help reduce future activity with practical prevention recommendations.' },
    ],
    whyChoose: [
      { title: 'Experienced Technicians', copy: 'Trained professionals with local pest-control expertise.' },
      { title: 'Safe & Effective Solutions', copy: 'Treatments selected for your home, family, and pest issue.' },
      { title: 'Fast Response', copy: 'Quick scheduling and efficient service when pests show up.' },
      { title: 'Satisfaction Guaranteed', copy: 'We are committed to your satisfaction and service quality.' },
    ],
    commonPests: ['Cockroaches', 'Ants', 'Rats & Mice', 'Spiders', 'Termites', 'Bed Bugs'],
  },
  {
    slug: 'lawn-care',
    title: 'Lawn Care',
    shortTitle: 'Lawn Care',
    image: '/assets/lawn-care.jpg',
    description:
      'Professional fertilization and weed control programs designed to keep your lawn healthy, vibrant, and beautiful.',
    eyebrow: 'Healthier Florida lawns',
    heading: 'Lawn Care Done the RightWay',
    intro:
      'From weed control to fertilization, RightWay builds lawn care programs around Northeast Florida turf, soil, weather, and seasonal pressure.',
    bullets: ['Fertilization programs', 'Weed control and lawn health support', 'Seasonal care for greener turf'],
  },
  {
    slug: 'termite-control',
    title: 'Termite Control',
    shortTitle: 'Termite Control',
    image: '/assets/termite-control.jpg',
    description:
      'Prevent costly termite damage with inspections, termite treatments, and long-term protection plans for your property.',
    eyebrow: 'Protect your property',
    heading: 'Termite Control Done the RightWay',
    intro:
      'RightWay provides termite inspections, treatment guidance, and ongoing protection options for homeowners who want to reduce costly termite risk.',
    bullets: ['Termite inspections', 'Treatment and prevention plans', 'Long-term property protection'],
  },
  {
    slug: 'mosquito-control',
    title: 'Mosquito Control',
    shortTitle: 'Mosquito Control',
    image: '/assets/mosquito-control.jpg',
    description:
      'Reduce mosquito populations around your home and make your backyard more comfortable for family and guests.',
    eyebrow: 'More comfortable outdoor spaces',
    heading: 'Mosquito Control Done the RightWay',
    intro:
      'RightWay helps reduce mosquito pressure around patios, yards, and outdoor spaces so your family can enjoy more time outside.',
    bullets: ['Targeted mosquito treatments', 'Yard and outdoor living area support', 'Seasonal mosquito reduction plans'],
  },
  {
    slug: 'tree-shrub-care',
    title: 'Tree & Shrub Care',
    shortTitle: 'Tree and Shrub Care',
    image: '/assets/tree-shrub-care.jpg',
    description:
      'Targeted treatments help protect your trees and shrubs from pests, disease, and nutrient deficiencies.',
    eyebrow: 'Landscape plant health',
    heading: 'Tree and Shrub Care Done the RightWay',
    intro:
      'RightWay supports ornamental trees and shrubs with targeted care for insects, disease pressure, and nutrient needs common in Northeast Florida landscapes.',
    bullets: ['Tree and shrub health treatments', 'Pest and disease support', 'Nutrient care for landscape plants'],
  },
  {
    slug: 'pump-protection',
    title: 'Pump Protection',
    shortTitle: 'Pump Protection',
    image: '/assets/palm-protection.jpg',
    description:
      'Protect pumps and related outdoor systems with practical service support designed for Florida properties.',
    eyebrow: 'Outdoor system support',
    heading: 'Pump Protection Done the RightWay',
    intro:
      'RightWay helps homeowners protect outdoor pumps and related property systems with practical service support, preventive checks, and local care.',
    bullets: ['Pump protection support', 'Preventive outdoor system checks', 'Local service from a veteran-owned team'],
  },
];

export const serviceAreas = [
  'Ponte Vedra',
  'Ponte Vedra Beach',
  'St. Augustine',
  'Nocatee',
  'Silverleaf',
  'St. Johns County',
  'Jacksonville Beaches',
];

export const footerLinks = ['Home', 'About Us', 'Services', 'Service Areas', 'Review', 'Guarantee', 'Contact Us'];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
