const { gql } = require('apollo-server');

const query = gql`
  type Query {
    businesses: [Business],
    categories: [Category],
    ratingsByLoggedInUser: [Rating],
  }
`;

module.exports = query;