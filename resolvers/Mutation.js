module.exports = {

  /********************************
   * BUSINESSES
   ********************************/
  async addBusiness(parent, args, { dataSources, auth }) {
    const business = {
      ...args,
    };

    const addedBusiness = dataSources.redOrGreenAPI.addBusiness(business);
    return addedBusiness;
  },

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

  async editRating(parent, args, { dataSources, auth }) {
    const rating = {
      ...args,
      user: auth.id
    };

    const editedRating = dataSources.redOrGreenAPI.editRating(rating);
    return editedRating;
  },

  async deleteRating(parent, args, { dataSources, auth }) {
    const ratingId = args.id;
    const deletedRating = dataSources.redOrGreenAPI.deleteRating(ratingId);
    return deletedRating;
  },

  /********************************
   * AUTH
   ********************************/
  async login(parent, args, { dataSources }) {
    const { email, password } = args;
    const token = await dataSources.redOrGreenAPI.login(email, password);
    return token;
  },

  async register(parent, args, { dataSources }) {
    const { email, username, password } = args;
    const token = await dataSources.redOrGreenAPI.register(email, username, password);
    return token;
  },
}