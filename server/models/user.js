const Model = require("./baseModel");
const USER = "user";


class User extends Model {
    static get tableName() {
        return USER;
    }

    static get relationMappings() {
        const { Case, CASE } = require("./");
        return {
            case: {
                relation: Model.HasManyRelation,
                modelClass: Case,
                join: {
                    from: `${USER}.id`,
                    to: `${CASE}.investigatorId`
                }
            }
        }
    }
}

module.exports = { User, USERS }