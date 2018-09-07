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

const server = new ApolloServer({ 
  typeDefs: [
    rootQuery,
    Business,
    Category,
  ],
  resolvers,
  playground 
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});