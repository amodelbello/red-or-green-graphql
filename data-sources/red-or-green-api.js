const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class RedOrGreenAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.auth.token);
  }

  /********************************
   * BUSINESSES
   ********************************/
  async getBusinesses() {
    const businesses = await this.get(`/businesses`);
    return businesses.data;
  }

  /********************************
   * RATINGS
   ********************************/
  async getRatingsByBusinessId(businessId = null) {
    if (businessId !== null) {
      const ratings = await this.get(`/ratings/b/${businessId}`);
      return ratings.data;
    }
  }

  async getRatingsByUserId(userId = null) {
    if (userId !== null) {
      const ratings = await this.get(`/ratings/u/${userId}`);
      return ratings.data;
    }
  }

  async addRating(rating) {
    const addedRating = await this.post(
      `/ratings`,
      rating.input,
    );
    return addedRating.data;
  }

  /********************************
   * AUTH
   ********************************/
  async login(email, password) {
    const token = await this.post(
      `/login`,
      { email, password }
    );
    
    return token.data.token;
  }

  async register(email, username, password) {
    const token = await this.post(
      `/register`,
      { email, username, password }
    );
    
    return token.data.token;
  }

  /********************************
   * Categories
   ********************************/
  async getCategories() {
    const categories = await this.get('/categories');
    return categories.data;
  }

}

module.exports = RedOrGreenAPI;