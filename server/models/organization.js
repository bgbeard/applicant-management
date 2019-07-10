import Model from './baseModel'
import { ORGANIZATION } from '../migrations/20190626204616_initialize_schema'

export default class Organization extends Model {
  static get tableName() {
    return ORGANIZATION
  }

  static get relationMappings() {
    // const { LookuplistValue,
    //   AgencyReference,
    //   Case } = require('./')
    const { LOOKUPLISTVALUE,
      AGENCYREFERENCE,
      CASE } = require('../migrations/20190626204616_initialize_schema')

    return {
      parentOrganization: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/organization',
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${ORGANIZATION}.parentOrganizationId`
        }
      },
      organizationType: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${ORGANIZATION}.organizationTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      agencyReferences: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/agencyreference',
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${AGENCYREFERENCE}.organizationId`
        }
      },
      cases: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/case',
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${CASE}.organizationId`
        }
      }
    }
  }
}
