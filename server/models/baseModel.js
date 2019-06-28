const { Model } = require("objection");
const { DbErrors } = require("objection-db-errors");

export class BaseModel extends DbErrors(Model) { }

// const knexConnection = knex(connection[process.env.ENV]);

// Model.knex(knexConnection);