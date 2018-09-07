const categories = [
  { name: 'Red Chile!' },
  { name: 'Green Chile' },
];

module.exports = {
  categories: (parent, args, context) => {
    return categories;
  },
};