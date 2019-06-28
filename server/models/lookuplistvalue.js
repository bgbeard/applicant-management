const Model = require("./baseModel");
const LOOKUPLISTVALUE = "lookuplistvalue";

class LookuplistValue extends Model {
    static get tableName() {
        return LOOKUPLISTVALUE;
    }

    static get relationMappings(){
        const { Case, CASE, 
            AgencyReference, AGENCYREFERENCE, 
            PersonalReference, PERSONALREFERENCE, 
            Organization, ORGANIZATION, 
            Loouplist, LOOKUPLIST} = require("./");

        return{
            jobTypes:{
                relation: Model.HasManyRelation,
                modelClass: Case,
                join:{
                    from:`${LOOUPLISTVALUE}.id`,
                    to:`${CASE}.jobTypeId`
                }
            },
            caseStatusTypes:{
                relation: Model.HasManyRelation,
                modelClass: Case,
                join:{
                    from:`${LOOUPLISTVALUE}.id`,
                    to:`${CASE}.statusTypeId`
                }
            },
            agencyReferenceTypes:{
                relation: Model.HasManyRelation,
                modelClass: AgencyReference,
                join:{
                    from:`${LOOUPLISTVALUE}.id`,
                    to:`${AGENCYREFERENCE}.agencyReferenceTypeId`
                }
            },
            organizationTypes:{
                relation: Model.HasManyRelation,
                modelClass: Organization,
                join:{
                    from:`${LOOUPLISTVALUE}.id`,
                    to:`${ORGANIZATION}.organizationTypeId`
                }
            },
            personalReferenceTypes:{
                relation: Model.HasManyRelation,
                modelClass: PersonalReference,
                join:{
                    from:`${LOOUPLISTVALUE}.id`,
                    to:`${PERSONALREFERENCE}.personalReferenceTypeId`
                }
            },
            lookuplist:{
                relation: Model.BelongsToOneRelation,
                modelClass: Lookuplist,
                join:{
                    from:`${LOOUPLIST}.id`,
                    to:`${LOOKUPLISTVALUE}.lookuplistId`
                }
            }
        }
    }
}

module.exports = { LookuplistValue, LOOKUPLISTVALUE }