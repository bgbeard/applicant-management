import Model from './baseModel'
import { LOOKUPLIST } from '../migrations/20190626204616_initialize_schema'

export default class Lookuplist extends Model {
  static get tableName() {
    return LOOKUPLIST
  }

  static get relationMappings() {
    // const { LookuplistValue } = require('./')
    const { LOOKUPLISTVALUE } = require('../migrations/20190626204616_initialize_schema')

    return {
      lookuplistValues: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${LOOKUPLIST}.id`,
          to: `${LOOKUPLISTVALUE}.lookuplistId`
        }
      }
    }
  }
}