module.exports = {
  categories: (parent, args, { dataSources }) => {
    const categories = dataSources.redOrGreenAPI.getCategories();
    return categories;
  },
};