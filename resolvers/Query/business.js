module.exports = {
  businesses: async (parent, args, { dataSources }) => {
    const businesses = await dataSources.redOrGreenAPI.getBusinesses();
    return businesses;
  },
};