const businesses = [
  { name: 'Tortilla Flats!' },
  { name: 'Maria\'s' },
];

module.exports = {
  businesses: (parent, args, context) => {
    return businesses
  },
};