const businesses = [
  { name: 'Tortilla Flats' },
  { name: 'Maria\'s' },
];

const categories = [
  { name: 'Red Chile' },
  { name: 'Green Chile' },
];

module.exports = {
  businesses: (parent, args, context) => {
    return businesses
  },
  
  categories: (parent, args, context) => {
    return categories;
  }
};