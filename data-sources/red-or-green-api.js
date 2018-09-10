const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class RedOrGreenAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
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
}

module.exports = RedOrGreenAPI;