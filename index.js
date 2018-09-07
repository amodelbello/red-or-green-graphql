const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

const Business = require('./types/Business');
const Category = require('./types/Category');

const rootQuery = require('./types/rootQuery');
const resolvers = require('./resolvers');


// There's a bug in apollo playground. This needs to be set manually for now
const playground = {
  settings: {
    'editor.cursorShape': 'line',
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ 
  typeDefs: [
    rootQuery,
    Business,
    Category,
  ],
  resolvers,
  playground 
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});