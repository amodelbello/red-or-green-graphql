const { gql } = require('apollo-server');
const DateTime = require('./scalar');

const mutation = gql`
  type Mutation {
    addRating(input: RatingInput!): Rating!
    login(email: String!, password: String!): String!
    # register()
  }

  input RatingInput {
    user: ID!
    business: ID!
    category: ID!
    rating: Int!
    comments: String
  }
`;

module.exports = mutation;