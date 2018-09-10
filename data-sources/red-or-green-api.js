const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class RedOrGreenAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getBusinesses() {
    const data = await this.get(`/businesses`);
    return data;
  }
}

module.exports = RedOrGreenAPI;