const { GraphQLScalarType } = require('graphql');

module.exports = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid datetime value',
    parseValue: value => new Date(value),
    serialize: value => new Date(value).toISOString(),
    parseLiteral: ast => ast.value
  }),

  Business: {
    id: parent => parent.id || parent._id
  }
};