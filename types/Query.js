const { gql } = require('apollo-server');

const query = gql`
  type Query {
    businesses: [Business],
    business(id: ID!): Business,
    ratingsByLoggedInUser: [Rating],
    rating(id: ID!): Rating,
    categories: [Category],
  }
`;

module.exports = query;