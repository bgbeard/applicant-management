import Model from './baseModel'
import { CASE } from '../migrations/20190626204616_initialize_schema'

export default class Case extends Model {
  static get tableName() {
    return CASE
  }

  static get relationMappings() {
    // const { LookuplistValue, Applicant, Organization, User } = require('./')
    const { LOOKUPLISTVALUE, APPLICANT, ORGANIZATION, USER } = require('../migrations/20190626204616_initialize_schema')

    return {
      jobType: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${CASE}.jobTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/applicant',
        join: {
          from: `${CASE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      agency: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/organization',
        join: {
          from: `${CASE}.agencyId`,
          to: `${ORGANIZATION}.id`
        }
      },
      ingestigator: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: `${CASE}.investigatorId`,
          to: `${USER}.id`
        }
      },
      caseStatusType: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/lookuplistvalue',
        join: {
          from: `${CASE}.caseStatusTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      }
    }
  }
}