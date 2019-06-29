const Model = require("./baseModel");
const LOOKUPLIST = "lookuplist";

class Lookuplist extends Model {
    static get tableName() {
        return LOOKUPLIST;
    }

    static get relationMappings() {
        const { LookuplistValue, LOOKUPLISTVALUE } = require("./");

        return {
            lookuplistValues: {
                relation: Model.HasManyRelation,
                modelClass: LookuplistValue,
                join: {
                    from: `${LOOKUPLIST}.id`,
                    to: `${LOOKUPLISTVALUE}.lookuplistId`
                }
            }
        }
    }
}

module.exports = { Lookuplist, LOOKUPLIST }