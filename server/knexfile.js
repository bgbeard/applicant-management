require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.CONN,
    seeds: {
      directory: './seeds/dev'
    }
  }
}