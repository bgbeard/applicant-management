require('@babel/register')
require('dotenv').config()
const { knexSnakeCaseMappers } = require('objection')

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.CONN,
    ...knexSnakeCaseMappers()
  },

  production: {
    client: 'pg',
    connection: process.env.CONN,
    pool: {
      min: 2,
      max: 10
    },
    ...knexSnakeCaseMappers()
  }
};
