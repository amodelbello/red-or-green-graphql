const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

const test = require('./types/Test');
const Business = require('./types/Business');
const query = require('./queries/rootQuery');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const businesses = [
  {
    name: 'Tortilla Flats'
  },
  {
    name: 'Maria\'s'
  },
];


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    businesses: () => businesses,
  },
};
const businessResolver = {
  Query: {
    businesses: () => businesses,
  },
};

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
  typeDefs: [test, Business],
  // typeDefs,
  resolvers,
  playground 
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});