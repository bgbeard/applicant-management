import BaseModel from './baseModel'
import { USER } from '../migrations/20190626204616_initialize_schema'

export default class User extends BaseModel {
  static get tableName() {
    return USER
  }

  static get relationMappings() {
    const { Case } = require('./')
    const { CASE } = require('../migrations/20190626204616_initialize_schema')
    return {
      case: {
        relation: Model.HasManyRelation,
        modelClass: Case,
        join: {
          from: `${USER}.id`,
          to: `${CASE}.investigatorId`
        }
      }
    }
  }
}
