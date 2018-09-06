const { gql } = require('apollo-server');

const Business = gql`
  type Business {
    name: String
  }
  type Businesses {
    businesses: [Business]
  }
`;

module.exports = Business;

