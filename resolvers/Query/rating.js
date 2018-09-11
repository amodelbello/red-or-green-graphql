module.exports = {
  ratingsByLoggedInUser: (parent, args, { dataSources, auth }) => {
    const userId = auth.id;
    const ratings = dataSources.redOrGreenAPI.getRatingsByUserId(userId);
    return ratings;
  },
};