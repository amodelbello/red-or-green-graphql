const { gql } = require('apollo-server');
const DateTime = require('./scalar');

const mutation = gql`

  type Mutation {
    addRating(input: RatingInput!): Rating!
    addBusiness(input: BusinessInput!): Business!
    login(email: String!, password: String!): ID!
    register(email: String!, username: String!, password: String!): ID!
  }

  input RatingInput {
    user: ID!
    business: ID!
    category: ID!
    rating: Int!
    comments: String
  }
  
  input BusinessInput {
    name: String!
    address: AddressInput!
    phone: String
  }

  input AddressInput {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: String!
  }
`;

module.exports = mutation;