const { gql } = require('apollo-server');

const User = require('./User');
const Category = require('./Category');

const Rating = gql`
  type Rating {
    id: ID!
    user: User!
    business: Business!
    category: Category!
    rating: Int!
    comments: String
    created: DateTime!
    updated: DateTime!
  }
`;

const AverageRating = gql`
  type AverageRating {
    category: String!
    rating: Float!
  }
`;

module.exports = () => [Rating, AverageRating, User, Category];
