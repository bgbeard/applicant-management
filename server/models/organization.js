import BaseModel from './baseModel'
import { ORGANIZATION } from '../migrations/20190626204616_initialize_schema'

export default class Organization extends BaseModel {
  static get tableName() {
    return ORGANIZATION
  }

  static get relationMappings() {
    const { LookuplistValue,
      AgencyReference,
      Case } = require('./')
    const { LOOKUPLISTVALUE,
      AGENCYREFERENCE,
      CASE } = require('../migrations/20190626204616_initialize_schema')

    return {
      parentOrganization: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organization,
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${ORGANIZATION}.parentOrganizationId`
        }
      },
      organizationType: {
        relation: Model.BelongsToOneRelation,
        modelClass: LookuplistValue,
        join: {
          from: `${ORGANIZATION}.organizationTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      agencyReferences: {
        relation: Model.HasManyRelation,
        modelClass: AgencyReference,
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${AGENCYREFERENCE}.organizationId`
        }
      },
      cases: {
        relation: Model.HasManyRelation,
        modelClass: Case,
        join: {
          from: `${ORGANIZATION}.id`,
          to: `${CASE}.organizationId`
        }
      }
    }
  }
}
