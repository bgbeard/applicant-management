const Model = require("./baseModel");
const CASE = "case";

class Case extends Model {
    static get tableName() {
        return CASE;
    }

    static get relationMappings(){
        const {LookuplistValue, LOOKUPLISTVALUE, Applicant, APPLICANT, Organization, ORGANIZATION, User, USER } = require("./");

        return{
            jobType:{
                relation: Model.BelongsToOneRelation,
                modelClass: LookuplistValue,
                join:{
                    from:`${LOOKUPLISTVALUE}.id`,
                    to:`${CASE}.jobTypeId`
                }
            },
            applicant: {
                relation: Model.BelongsToOneRelation,
                modelClass: Applicant,
                join:{
                    from:`${APPLICANT}.id`,
                    to:`${CASE}.applicantId`
                }
            },
            agency:{
                relation: Model.BelongsToOneRelation,
                modelClass: Organization,
                join: {
                    from:`${ORGANIZATION}.id`,
                    to:`${CASE}.agencyId`
                }
            },
            ingestigator:{
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join:{
                    from:`${USER}.id`,
                    to:`${CASE}.investigatorId`
                }
            },
            caseStatusType:{
                relation: Model.BelongsToOneRelation,
                modelClass: LookuplistValue,
                join:{
                    from:`${LOOKUPLISTVALUE}.id`,
                    to:`${CASE}.caseStatusTypeId`
                }
            }
        }
    }
}

module.exports = { Case, CASE }