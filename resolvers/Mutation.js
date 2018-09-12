module.exports = {

  /********************************
   * BUSINESSES
   ********************************/
  // ...

  /********************************
   * RATINGS
   ********************************/
  async addRating(parent, args, { dataSources, auth }) {
    const rating = {
      ...args,
      user: auth.id
    };

    const addedRating = dataSources.redOrGreenAPI.addRating(rating);
    return addedRating;
  },

  /********************************
   * AUTH
   ********************************/
  async login(parent, args, { dataSources }) {
    const { email, password } = args;
    const token = await dataSources.redOrGreenAPI.login(email, password);
    return token;
  }
}