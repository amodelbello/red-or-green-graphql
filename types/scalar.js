const { gql } = require('apollo-server');

const DateTime = gql`
  scalar DateTime
`;

module.exports = () => [
  DateTime,
];