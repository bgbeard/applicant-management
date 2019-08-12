import { Model } from 'objection'
import { DbErrors } from 'objection-db-errors'

export default class BaseModel extends DbErrors(Model) { }