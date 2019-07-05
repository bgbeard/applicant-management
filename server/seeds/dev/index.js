const seedAgencyReferences = require('../seedData/agencyreference/index').seed
const seedApplicants = require('../seedData/applicant/index').seed
const seedCases = require('../seedData/case/index').seed
const seedLookuplists = require('../seedData/lookuplist/index').seed
const seedLookuplistValues = require('../seedData/lookuplistvalue/index').seed
const seedOrganizations = require('../seedData/organization/index').seed
const seedPersonalReferences = require('../seedData/personalreference/index').seed
const seedUsers = require('../seedData/user/index').seed

const seedAll = async (knex) => {
    try {
        // console.log('0')
        await seedUsers(knex)
        // console.log('1')
        await seedApplicants(knex)
        // console.log('2')
        await seedLookuplists(knex)
        // console.log('3')
        await seedLookuplistValues(knex)
        // console.log('4')
        await seedPersonalReferences(knex)
        // // console.log("5")
        await seedOrganizations(knex)
        // // console.log("6")
        await seedAgencyReferences(knex)
        // // console.log("7")
        await seedCases(knex)
        // console.log("8")
    } catch (err) {
        console.error(err)
    }
}

exports.seed = async (knex) => {
    const { Model } = require('objection')

    Model.knex(knex)

    return seedAll(knex)
}
