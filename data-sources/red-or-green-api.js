const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class RedOrGreenAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getBusinesses() {
    console.log('hello from datasource GET');
    const data = await this.get(`/businesses`);
    console.log(data);
    return data;
  }
}

module.exports = RedOrGreenAPI;