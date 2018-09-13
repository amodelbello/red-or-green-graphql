const { gql } = require('apollo-server');
const DateTime = require('./scalar');

const mutation = gql`

  type Mutation {
    addBusiness(input: BusinessInput!): Business!
    addRating(input: RatingInput!): Rating!
    editRating(input: RatingInput!): Rating!
    deleteRating(id: ID!): Rating!
    login(email: String!, password: String!): ID!
    register(email: String!, username: String!, password: String!): ID!
  }

  input RatingInput {
    id: ID
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