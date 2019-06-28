const Model = require("./baseModel");
const AGENCYREFERENCE = "agencyreference";

class AgencyReference extends Model {
    static get tableName() {
        return AGENCYREFERENCE;
    }

    static get relationMappings(){
        const { LookuplistValue, LOOKUPLISTVALUE, 
            Applicant, APPLICANT, 
            Organization, ORGANIZATION} = require(".");

        return{
            agencyreferencetype: {
                relation: Model.BelongsToOneRelation,
                modelClass: LookuplistValue,
                join: {
                    from: `${LOOKUPLISTVALUE}.id`,
                    to: `${AGENCYREFERENCE}.agencyreferencetypeId`
                }
            },
            applicant: {
                relation: Model.BelongsToOneRelation,
                modelClass: Applicant,
                join: {
                    from: `${APPLICANT}.id`,
                    to: `${AGENCYREFERENCE}.applicantId`
                }
            },
            agency: {
                relation: Model.BelongsToOneRelation,
                modelClass: Organization,
                join: {
                    from: `${ORGANIZATION}.id`,
                    to: `${AGENCYREFERENCE}.agencyId`
                }
            }
        }
    }
}

module.exports = { AgencyReference, AGENCYREFERENCE }