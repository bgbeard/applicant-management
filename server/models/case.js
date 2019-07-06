import BaseModel from './baseModel'
import { CASE } from '../migrations/20190626204616_initialize_schema'

export default class Case extends BaseModel {
  static get tableName() {
    return CASE
  }

  static get relationMappings() {
    const { LookuplistValue, Applicant, Organization, User } = require('./')
    const { LOOKUPLISTVALUE, APPLICANT, ORGANIZATION, USER } = require('../migrations/20190626204616_initialize_schema')

    return {
      jobType: {
        relation: Model.BelongsToOneRelation,
        modelClass: LookuplistValue,
        join: {
          from: `${CASE}.jobTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Applicant,
        join: {
          from: `${CASE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      agency: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organization,
        join: {
          from: `${CASE}.agencyId`,
          to: `${ORGANIZATION}.id`
        }
      },
      ingestigator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${CASE}.investigatorId`,
          to: `${USER}.id`
        }
      },
      caseStatusType: {
        relation: Model.BelongsToOneRelation,
        modelClass: LookuplistValue,
        join: {
          from: `${CASE}.caseStatusTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      }
    }
  }
}