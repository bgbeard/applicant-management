const Model = require("./baseModel");
const PERSONALREFERENCE = "personalreference";

class PersonalReference extends Model {
    static get tableName() {
        return PERSONALREFERENCE;
    }

    static get relationMappings(){
        const { Applicant, APPLICANT,
            LookuplistValue, LOOKUPLISTVALUE } = require("./");

        return{
            applicant:{
                relation: Model.BelongsToOneRelation,
                modelClass: Applicant,
                join:{
                    from:`${APPLICANTS}.id`,
                    to:`${PERSONALREFERENCE}.applicantId`
                }
            },
            personalReferencetype:{
                relation: Model.BelongsToOneRelation,
                modelClass: LookuplistValue,
                join:{
                    from:`${LOOKUPLISTVALUE}.id`,
                    to:`${PERSONALREFERENCE}.personalReferenceTypeId`
                }
            }
        }
    }
}

module.exports = { PersonalReference, PERSONALREFERENCE }