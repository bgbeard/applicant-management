const USER = "user";
const LOOKUPLIST = "lookuplist";
const LOOKUPLISTVALUE = "lookuplistvalue";
const APPLICANT = "applicant";
const PERSONALREFERENCE = "personalreference";
const ORGANIZATION = "organization";
const AGENCYREFERENCE = "agencyreference";
const CASE = "case";


exports.up = async (knex) => {
    try {
        const promises = schemas.map(async ({ name, makeSchema }) => {
            const exists = await knex.schema.hasTable(name)
            return exists || knex.schema.createTable(name, table => makeSchema(table, knex))
        })
        await Promise.all(promises)
        console.log("***schema migrated***");
        return
    } catch (err) {
        console.error(err);
    }
};

exports.down = async (knex) => {
    try {
        await knex.schema.dropTableIfExists(CASE)
        await knex.schema.dropTableIfExists(AGENCYREFERENCE)
        await knex.schema.dropTableIfExists(ORGANIZATION)
        await knex.schema.dropTableIfExists(PERSONALREFERENCE)
        await knex.schema.dropTableIfExists(APPLICANT)
        await knex.schema.dropTableIfExists(LOOKUPLISTVALUE)
        await knex.schema.dropTableIfExists(LOOKUPLIST)
        await knex.schema.dropTableIfExists(USER)
        console.log("***tables dropped***")
    } catch (err) {
        console.error(err)
    }
};

const schemas = [
    {
        name: USER,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.string("fname")
            table.string("lname")
            table.string("email")
            table.string("phone")
        }
    },
    {
        name: LOOKUPLIST,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.string("name")
        }
    },
    {
        name: LOOKUPLISTVALUE,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.integer("lookuplistid")
                .references("id")
                .inTable(LOOKUPLIST)
                .index()
            table.string("value")
        }
    },
    {
        name: APPLICANT,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.string("fname")
            table.string("lname")
            table.string("email")
            table.string("phone")
            table.string("ss")
            table.date("dob")
            table.string("address1")
            table.string("address2")
            table.string("city")
            table.string("state")
            table.string("zip")
        }
    },
    {
        name: PERSONALREFERENCE,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.integer("applicantid")
                .references("id")
                .inTable(APPLICANT)
                .index()
            table.integer("personalreferencetypeid")
                .references("id")
                .inTable(LOOKUPLISTVALUE)
                .index()
            table.string("title")
            table.string("fname")
            table.string("lname")
            table.string("email")
            table.string("phone")
            table.string("relationship")
            table.string("company")
            table.string("address1")
            table.string("address2")
            table.string("city")
            table.string("state")
            table.string("zip")
        }
    },
    {
        name: ORGANIZATION,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.integer("organizationtypeid")
                .references("id")
                .inTable(LOOKUPLISTVALUE)
                .index()
            table.integer("parentorganizationid")
                .references("id")
                .inTable(ORGANIZATION)
                .index()
            table.string("name")
            table.string("address1")
            table.string("address2")
            table.string("city")
            table.string("state")
            table.string("zip")
        }
    },
    {
        name: AGENCYREFERENCE,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.integer("agencyreferencetypeid")
                .references("id")
                .inTable(LOOKUPLISTVALUE)
                .index()
            table.integer("applicantid")
                .references("id")
                .inTable(APPLICANT)
                .index()
            table.integer("agencyid")
                .references("id")
                .inTable(ORGANIZATION)
                .index()
            table.string("appliedposition")
            table.string("appliedinvestigator")
            table.date("applieddate")
        }
    },
    {
        name: CASE,
        makeSchema: (table, knex) => {
            table.increments("id").primary()
            table.integer("jobtypeid")
                .references("id")
                .inTable(LOOKUPLISTVALUE)
                .index()
            table.integer("applicantid")
                .references("id")
                .inTable(APPLICANT)
                .index()
            table.integer("agencyid")
                .references("id")
                .inTable(ORGANIZATION)
                .index()
            table.integer("investigatorid")
                .references("id")
                .inTable(USER)
                .index()
            table.integer("casestatustypeid")
                .references("id")
                .inTable(LOOKUPLISTVALUE)
                .index()
            table.date("duedate")
            table.date("jobname")
        }
    }
]