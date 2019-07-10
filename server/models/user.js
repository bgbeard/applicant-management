import Model from './baseModel'
import { USER } from '../migrations/20190626204616_initialize_schema'

export default class User extends Model {
  static get tableName() {
    return USER
  }

  static get relationMappings() {
    // const { Case } = require('./')
    const { CASE } = require('../migrations/20190626204616_initialize_schema')
    return {
      case: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/case',
        join: {
          from: `${USER}.id`,
          to: `${CASE}.investigatorId`
        }
      }
    }
  }
}
