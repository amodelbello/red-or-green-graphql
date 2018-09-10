const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { merge } = require('lodash');
require('dotenv').config();

const Business = require('./types/Business');
const Category = require('./types/Category');
const rootQuery = require('./types/Query');
const resolvers = require('./resolvers');
const RedOrGreenAPI = require('./data-sources/red-or-green-api');

async function start() {
  const app = express();

  const server = new ApolloServer({ 
    typeDefs: [
      rootQuery,
      Business,
      Category,
    ],
    resolvers,
    dataSources: () => {
      return {
        redOrGreenAPI: new RedOrGreenAPI(),
      }
    },
    context: async({ req }) => {
      const rgApiUrl = process.env.API_URL;

      return {
        rgApiUrl,
      }
    },
    playground: {
      // There's a bug in apollo playground. This needs to be set manually for now
      settings: {
        'editor.cursorShape': 'line',
      },
    } 
  });

  server.applyMiddleware({ app });

  app.get('/', (req, res) => res.end('Red Or Green GraphQL API'));
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at  http://localhost:4000${server.graphqlPath}`);
  });
}

start();