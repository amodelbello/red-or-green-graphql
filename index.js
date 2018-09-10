const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { merge } = require('lodash');

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
      return {
        // TODO: Testing tokens need to be organized a little better
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFmNGVmZGI0NGJkMWZlMmE1ZGVhNzkiLCJlbWFpbCI6ImFkbWludXNlckBsYWxhbGEuY29tIiwidXNlcm5hbWUiOiJhZG1pbnVzZXIiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoxNTMxNDIwNjM5LCJpYXQiOjE1Mjg4Mjg2Mzl9.U6Ku8U42fn84u8lFScx4xvWo8Zz_KoAEppGAScleB5g`
      };
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