import Model from './baseModel'
import { AGENCYREFERENCE } from '../migrations/20190626204616_initialize_schema'

export default class AgencyReference extends Model {
  static get tableName() {
    return AGENCYREFERENCE
  }

  static get relationMappings() {
    // const { LookuplistValue, Applicant, Organization } = require('.')
    const { LOOKUPLISTVALUE, APPLICANT, ORGANIZATION } = require('../migrations/20190626204616_initialize_schema')

    return {
      agencyreferencetype: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${AGENCYREFERENCE}.agencyReferenceTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/applicant',
        join: {
          from: `${AGENCYREFERENCE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      agency: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/organization',
        join: {
          from: `${AGENCYREFERENCE}.agencyId`,
          to: `${ORGANIZATION}.id`
        }
      }
    }
  }
}