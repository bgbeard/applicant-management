import { Model } from 'objection'
import pg from 'pg'

// Prevents node-postgres returning bigint as string instead of number.
// Must run before requiring knex.
// pg.types.setTypeParser(1700, 'text', parseInt)
pg.types.setTypeParser(1700, parseFloat)

const Knex = require('knex')
const { stage } = require('../config')
const knexConfig = require('../knexfile')[stage]
const knex = Knex(knexConfig)
Model.knex(knex)

module.exports = {
  ...require('./addApplicant')
}