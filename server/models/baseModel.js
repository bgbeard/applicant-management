import { Model } from 'objection'
import { DbErrors } from 'objection-db-errors'
import Knex from 'knex'
import { knexConfig } from '../knexfile'
const knexConn = Knex(knexConfig.development)
Model.knex(knexConn)

export default class BaseModel extends DbErrors(Model) { }