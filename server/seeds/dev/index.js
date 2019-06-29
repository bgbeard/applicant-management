const seedAgencyReferences = require("../seedData/agencyreference").seed;
const seedApplicants = require("../seedData/applicant").seed;
const seedCases = require("../seedData/case").seed;
const seedLookuplists = require("../seedData/lookuplist").seed;
const seedLookuplistValues = require("../seedData/lookuplistvalue").seed;
const seedOrganizations = require("../seedData/organization").seed;
const seedPersonalReferences = require("../seedData/personalreference").seed;
const seedUsers = require("../seedData/user").seed;

const seedAll = async (knex) => {
    try {
        console.log("0");
        await seedUsers(knex);
        console.log("1")
        await seedApplicants(knex);
        console.log("2")
        await seedLookuplists(knex);
        console.log("3")
        await seedLookuplistValues(knex);
        console.log("4")
        // await seedPersonalReferences(knex);
        // console.log("5")
        // await seedOrganizations(knex);
        // console.log("6")
        // await seedAgencyReferences(knex);
        // console.log("7")
        // await seedCases(knex);
        // console.log("8")
    } catch (err) {
        console.error(err);
    }
}

exports.seed = async (knex) => {
    const { Model } = require("objection");

    Model.knex(knex);

    return seedAll(knex);
}