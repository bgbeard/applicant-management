import Model from './baseModel'
import { APPLICANT } from '../migrations/20190626204616_initialize_schema'

export default class Applicant extends Model {
  static get tableName() {
    return APPLICANT
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['fname', 'lname', 'email'],
      properties: {
        fname: { type: 'string' },
        lname: { type: 'string' },
        email: { type: 'string' },
        fname: { type: 'string' },
        phone: { type: 'string' },
        ss: { type: 'string' },
        dob: { type: 'date' },
        address1: { type: 'string' },
        address2: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        zip: { type: 'string' }
      }
    }
  }

  static get relationMappings() {
    // const { Case, PersonalReference, AgencyReference } = require('./')
    const { PersonalReference } = require('./')
    const { CASE, PERSONALREFERENCE, AGENCYREFERENCE } = require('../migrations/20190626204616_initialize_schema')

    return {
      cases: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/case',
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
        modelClass: __dirname + '/agencyreference',
        join: {
          from: `${APPLICANT}.id`,
          to: `${AGENCYREFERENCE}.applicantId`
        }
      }
    }
  }
}