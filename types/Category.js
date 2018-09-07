const { gql } = require('apollo-server');

const DateTime = require('./scalar');

const Category = gql`
  type Category {
    name: String!
    description: String
    created: DateTime!
    updated: DateTime!
  }
`;

module.exports = () => [
  Category,
  DateTime,
];

