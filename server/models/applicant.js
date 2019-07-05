const Model = require('./baseModel')
const APPLICANT = 'applicant'

class Applicant extends Model {
  static get tableName () {
    return APPLICANT
  }

  static get relationMappings () {
    const { Case, CASE,
      PersonalReference, PERSONALREFERENCE,
      AgencyReference, AGENCYREFERENCE } = require('./')

    return {
      cases: {
        relation: Model.HasManyRelation,
        modelClass: Case,
        join: {
          from: `${APPLICANT}.id`,
          to: `${CASE}.applicantId`
        }
      },
      personalReferences: {
        relation: Model.HasManyRelation,
        modelClass: PersonalReference,
        join: {
          from: `${APPLICANT}.id`,
          to: `${PERSONALREFERENCE}.applicantId`
        }
      },
      agencyReferences: {
        relation: Model.HasManyRelation,
        modelClass: AgencyReference,
        join: {
          from: `${APPLICANT}.id`,
          to: `${AGENCYREFERENCE}.applicantId`
        }
      }
    }
  }
}

module.exports = { Applicant, APPLICANT }
