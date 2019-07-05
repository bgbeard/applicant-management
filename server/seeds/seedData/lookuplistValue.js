const { LookuplistValue, Lookuplist } = require('../../models')

const lookuplistValues = [
  { lookuplist: 'caseStatusType', value: 'open' },
  { lookuplist: 'caseStatusType', value: 'complete' },
  { lookuplist: 'personalReferenceType', value: 'employment' },
  { lookuplist: 'personalReferenceType', value: 'personal' },
  { lookuplist: 'organizationType', value: 'Police Department' },
  { lookuplist: 'organizationType', value: 'Fire Department' },
  { lookuplist: 'agencyReferenceType', value: 'check' },
  { lookuplist: 'agencyReferenceType', value: 'applied' },
  { lookuplist: 'jobType', value: 'sworn' },
  { lookuplist: 'jobType', value: 'civilian' }
]

const insertLookuplistValue = async ({ lookuplist, value }) => {
  try {
    let lookuplistId = await Lookuplist.query().findOne({ name: lookuplist }).select('id')
    lookuplistId = lookuplistId.id
    await LookuplistValue.query().insert({ lookuplistId, value })
  } catch (err) {
    console.error(err)
  }
}

const promises = lookuplistValues.map(insertLookuplistValue)

exports.seed = async (knex) => Promise.all(promises)
