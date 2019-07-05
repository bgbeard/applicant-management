const Model = require('./baseModel')
const PERSONALREFERENCE = 'personalreference'

class PersonalReference extends Model {
  static get tableName () {
    return PERSONALREFERENCE
  }

  static get relationMappings () {
    const { Applicant, APPLICANT,
      LookuplistValue, LOOKUPLISTVALUE } = require('./')

    return {
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Applicant,
        join: {
          from: `${PERSONALREFERENCE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      personalReferencetype: {
        relation: Model.BelongsToOneRelation,
        modelClass: LookuplistValue,
        join: {
          from: `${PERSONALREFERENCE}.personalReferenceTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      }
    }
  }
}

module.exports = { PersonalReference, PERSONALREFERENCE }
