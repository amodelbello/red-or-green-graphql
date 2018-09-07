const { gql } = require('apollo-server');

const Address = require('./Address');
const Rating = require('./Rating');
const DateTime = require('./scalar');

const Business = gql`
  type Business {
    id: ID!
    name: String!
    address: Address
    phone: String
    ratings: [Rating]
    created: DateTime!
    updated: DateTime!
  }
`;

module.exports = () => [
  Business,
  Address,
  Rating,
  DateTime,
];
