import BaseModel from './baseModel'
import { LOOKUPLISTVALUE } from '../migrations/20190626204616_initialize_schema'

export default class LookuplistValue extends BaseModel {
  static get tableName() {
    return LOOKUPLISTVALUE
  }

  static get relationMappings() {
    const { Case,
      AgencyReference,
      PersonalReference,
      Organization,
      Lookuplist } = require('./')
    const { CASE,
      AGENCYREFERENCE,
      PERSONALREFERENCE,
      ORGANIZATION,
      LOOKUPLIST } = require('../migrations/20190626204616_initialize_schema')

    return {
      jobTypes: {
        relation: Model.HasManyRelation,
        modelClass: Case,
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${CASE}.jobTypeId`
        }
      },
      caseStatusTypes: {
        relation: Model.HasManyRelation,
        modelClass: Case,
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${CASE}.caseStatusTypeId`
        }
      },
      agencyReferenceTypes: {
        relation: Model.HasManyRelation,
        modelClass: AgencyReference,
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${AGENCYREFERENCE}.agencyReferenceTypeId`
        }
      },
      organizationTypes: {
        relation: Model.HasManyRelation,
        modelClass: Organization,
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${ORGANIZATION}.organizationTypeId`
        }
      },
      personalReferenceTypes: {
        relation: Model.HasManyRelation,
        modelClass: PersonalReference,
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${PERSONALREFERENCE}.personalReferenceTypeId`
        }
      },
      lookuplist: {
        relation: Model.BelongsToOneRelation,
        modelClass: Lookuplist,
        join: {
          from: `${LOOKUPLISTVALUE}.lookuplistId`,
          to: `${LOOKUPLIST}.id`
        }
      }
    }
  }
}