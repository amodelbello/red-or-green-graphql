const { merge } = require('lodash');

const businessQueries = require('./business');
const categoryQueries = require('./categories');

module.exports = merge(
  businessQueries,
  categoryQueries,
)
