import BaseModel from './baseModel'
import { APPLICANT } from '../migrations/20190626204616_initialize_schema'

export default class Applicant extends BaseModel {
  static get tableName() {
    return APPLICANT
  }

  static get relationMappings() {
    const { Case, PersonalReference, AgencyReference } = require('./')
    const { CASE, PERSONALREFERENCE, AGENCYREFERENCE } = require('../migrations/20190626204616_initialize_schema')

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