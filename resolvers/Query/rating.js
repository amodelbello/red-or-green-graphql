module.exports = {
  ratingsByLoggedInUser: (parent, args, { dataSources, auth }) => {
    const userId = auth.id;
    const ratings = dataSources.redOrGreenAPI.getRatingsByUserId(userId);
    return ratings;
  },

  rating: (parent, args, { dataSources, auth }) => {
    const ratingId = args.id;
    const rating = dataSources.redOrGreenAPI.getRating(ratingId);
    return rating;
  },
};