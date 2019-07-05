const Model = require('./baseModel')
const CASE = 'case'

class Case extends Model {
  static get tableName () {
    return CASE
  }

  static get relationMappings () {
    const { LookuplistValue, LOOKUPLISTVALUE, Applicant, APPLICANT, Organization, ORGANIZATION, User, USER } = require('./')

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

module.exports = { Case, CASE }
