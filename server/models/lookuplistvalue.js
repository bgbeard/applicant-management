const Model = require("./baseModel");
const LOOKUPLISTVALUE = "lookuplistvalue";

class LookuplistValue extends Model {
    static get tableName() {
        return LOOKUPLISTVALUE;
    }

    static get relationMappings() {
        const { Case, CASE,
            AgencyReference, AGENCYREFERENCE,
            PersonalReference, PERSONALREFERENCE,
            Organization, ORGANIZATION,
            Lookuplist, LOOKUPLIST } = require("./");

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
                    to: `${CASE}.statusTypeId`
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

module.exports = { LookuplistValue, LOOKUPLISTVALUE }