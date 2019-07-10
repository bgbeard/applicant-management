import Model from './baseModel'
import { LOOKUPLISTVALUE } from '../migrations/20190626204616_initialize_schema'

export default class LookuplistValue extends Model {
  static get tableName() {
    return LOOKUPLISTVALUE
  }

  static get relationMappings() {
    // const { Case,
    //   AgencyReference,
    //   PersonalReference,
    //   Organization,
    //   Lookuplist } = require('./')
    const { CASE,
      AGENCYREFERENCE,
      PERSONALREFERENCE,
      ORGANIZATION,
      LOOKUPLIST } = require('../migrations/20190626204616_initialize_schema')

    return {
      jobTypes: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/case',
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${CASE}.jobTypeId`
        }
      },
      caseStatusTypes: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/case',
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${CASE}.caseStatusTypeId`
        }
      },
      agencyReferenceTypes: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/agencyreference',
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${AGENCYREFERENCE}.agencyReferenceTypeId`
        }
      },
      organizationTypes: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/organization',
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${ORGANIZATION}.organizationTypeId`
        }
      },
      personalReferenceTypes: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/personalreference',
        join: {
          from: `${LOOKUPLISTVALUE}.id`,
          to: `${PERSONALREFERENCE}.personalReferenceTypeId`
        }
      },
      lookuplist: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplist',
        join: {
          from: `${LOOKUPLISTVALUE}.lookuplistId`,
          to: `${LOOKUPLIST}.id`
        }
      }
    }
  }
}