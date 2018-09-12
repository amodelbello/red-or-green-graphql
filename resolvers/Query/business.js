module.exports = {
  businesses: (parent, args, { dataSources }) => {
    const businesses = dataSources.redOrGreenAPI.getBusinesses();
    return businesses;
  },

  business: (parent, args, { dataSources }) => {
    const businessId = args.id;
    const business = dataSources.redOrGreenAPI.getBusiness(businessId);
    return business;
  },
};