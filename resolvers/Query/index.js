const { merge } = require('lodash');

const businessQueries = require('./business');
const categoryQueries = require('./category');
const ratingQueries = require('./rating');

module.exports = merge(
  businessQueries,
  categoryQueries,
  ratingQueries,
)
