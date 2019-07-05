const seedAll = async (knex) => {
    try {
        await require('../seedData/user').seed(knex)
        await require('../seedData/applicant').seed(knex)
        await require('../seedData/lookuplist').seed(knex)
        await require('../seedData/lookuplistValue').seed(knex)
        await require('../seedData/personalReference').seed(knex)
        await require('../seedData/organization').seed(knex)
        await require('../seedData/agencyReference').seed(knex)
        await require('../seedData/case').seed(knex)
    } catch (err) {
        console.error(err)
    }
}

exports.seed = async (knex) => {
    const { Model } = require('objection')
    Model.knex(knex)
    return seedAll(knex)
}
