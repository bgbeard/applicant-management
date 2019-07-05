const Model = require('./baseModel')
const AGENCYREFERENCE = 'agencyreference'

class AgencyReference extends Model {
  static get tableName () {
    return AGENCYREFERENCE
  }

  static get relationMappings () {
    const { LookuplistValue, LOOKUPLISTVALUE,
      Applicant, APPLICANT,
      Organization, ORGANIZATION } = require('.')

    return {
      agencyreferencetype: {
        relation: Model.BelongsToOneRelation,
        modelClass: LookuplistValue,
        join: {
          from: `${AGENCYREFERENCE}.agencyReferenceTypeId`,
          to: `${LOOKUPLISTVALUE}.id`
        }
      },
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Applicant,
        join: {
          from: `${AGENCYREFERENCE}.applicantId`,
          to: `${APPLICANT}.id`
        }
      },
      agency: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organization,
        join: {
          from: `${AGENCYREFERENCE}.agencyId`,
          to: `${ORGANIZATION}.id`
        }
      }
    }
  }
}

module.exports = { AgencyReference, AGENCYREFERENCE }
