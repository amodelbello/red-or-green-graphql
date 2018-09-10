const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class RedOrGreenAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getBusinesses() {
    const businesses = await this.get(`/businesses`);
    return businesses.data;
  }

  async getRatings(businessId = null) {
    if (businessId !== null) {
      const ratings = await this.get(`/ratings/b/${businessId}`);
      return ratings.data;
    }
  }

  async getCategories() {
    const categories = await this.get('/categories');
    return categories.data;
  }
}

module.exports = RedOrGreenAPI;