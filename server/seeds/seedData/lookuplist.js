const { Lookuplist } = require('../../models')

const lookuplists = [
  { name: 'caseStatusType' },
  { name: 'personalReferenceType' },
  { name: 'organizationType' },
  { name: 'agencyReferenceType' },
  { name: 'jobType' }
]

const insertLookuplist = async ({ name }) => {
  try {
    await Lookuplist.query().insert({ name: name })
  } catch (err) {
    console.error(err)
  }
}

const promises = lookuplists.map(insertLookuplist)

exports.seed = async (knex) => Promise.all(promises)
