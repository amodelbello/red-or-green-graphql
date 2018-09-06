const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const query = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book],
    businesses: [Business]
  }
`;

module.exports = query;