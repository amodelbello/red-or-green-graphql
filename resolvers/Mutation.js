module.exports = {
  async addRating(parent, args, { dataSources, auth }) {
    const rating = {
      ...args,
      user: auth.id
    };

    const addedRating = dataSources.redOrGreenAPI.addRating(rating);
    return addedRating;
  }
}