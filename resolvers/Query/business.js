module.exports = {
  businesses: (parent, args, { dataSources }) => {
    const businesses = dataSources.redOrGreenAPI.getBusinesses();
    return businesses;
  },
};