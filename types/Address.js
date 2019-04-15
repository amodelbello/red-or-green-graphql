const { gql } = require('apollo-server');

const Address = gql`
  type Address {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: String!
  }
`;

module.exports = () => [Address];
