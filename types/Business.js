const { gql } = require('apollo-server');

const Address = require('./Address');
const AverageRating = require('./Rating');
const DateTime = require('./scalar');

const Business = gql`
  type Business {
    id: ID!
    name: String!
    address: Address
    phone: String
    averageRatings: [AverageRating]
    created: DateTime!
    updated: DateTime!
  }
`;

module.exports = () => [Business, Address, AverageRating, DateTime];
