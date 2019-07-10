import Model from './baseModel'
import { PERSONALREFERENCE } from '../migrations/20190626204616_initialize_schema'

export default class PersonalReference extends Model {
  static get tableName() {
    return PERSONALREFERENCE
  }

  static get relationMappings() {
    // const { Applicant,
    //   LookuplistValue } = require('./')
    const { APPLICANT,
      LOOKUPLISTVALUE } = require('../migrations/20190626204616_initialize_schema')

    return {
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/applicant',
        join: {
          from: `${PERSONALREFERENCE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      personalReferencetype: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${PERSONALREFERENCE}.personalReferenceTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      }
    }
  }
}