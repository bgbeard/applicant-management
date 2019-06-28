const Model = require("./baseModel");
const ORGANIZATION = "organization";

class Organization extends Model {
    static get tableName() {
        return ORGANIZATION;
    }

    static get relationMappings(){
        const{ LookuplistValue, LOOKUPLISTVALUE,
            AgencyReference, AGENCYREFERENCE,
            Case, CASE } = require("./");

        return{
            parentOrganization:{
                relation: Model.BelongsToOneRelation,
                modelClass: Organization,
                join: {
                    from:`${ORGANIZATION}.id`,
                    to:`${ORGANIZATION}.parentOrganizationId`
                }
            },
            organizationType:{
                relation: Model.BelongsToOneRelation,
                modelClass: LookuplistValue,
                join: {
                    from:`${LOOKUPLISTVALUE}.id`,
                    to:`${ORGANIZATION}.organizationTypeId`
                }
            },
            agencyReferences:{
                relation: Model.HasManyRelation,
                modelClass: AgencyReference,
                join: {
                    from:`${ORGANIZATION}.id`,
                    to:`${AGENCYREFERENCE}.organizationId`
                }
            },
            cases:{
                relation: Model.HasManyRelation,
                modelClass: Case,
                join: {
                    from:`${ORGANIZATION}.id`,
                    to:`${CASE}.organizationId`
                }
            }
        }
    }
}

module.exports = { Organization, ORGANIZATION }