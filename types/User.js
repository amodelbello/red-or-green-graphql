const { gql } = require('apollo-server');

const Address = require('./Address');

const User = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    firstname: String!
    lastname: String!
    chilePreference: String!
    address: Address
    phone: String!
    role: String!
    created: DateTime!
    updated: DateTime!
  }
`;

module.exports = () => [
  User,
  Address,
];

