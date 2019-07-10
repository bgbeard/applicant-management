require('dotenv').config()

export const knexConfig = {
  development: {
    client: 'pg',
    connection: process.env.CONN
  }
}

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.CONN,
//     seeds: {
//       directory: './seeds/dev'
//     }
//   }
// }