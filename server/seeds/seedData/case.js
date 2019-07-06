const { Case, LookuplistValue, Applicant, Organization, User } = require('../../models')

const cases = [
  { jobType: 'sworn', applicant: 'Vasquez', agency: 'Irvine Police Department', investigator: 'Greg', caseStatus: 'open', dueDate: '2019/07/04', jobName: 'Police Officer' },
  { jobType: 'civilian', applicant: 'Park', agency: 'Santa Ana Police Department', investigator: 'Greg', caseStatus: 'complete', dueDate: '2019/06/18', jobName: 'Safety Inspector' }
]

const insertCase = async ({ jobType, applicant, agency, investigator, caseStatus, jobName, dueDate }) => {
  try {
    let jobTypeId = await LookuplistValue.query().findOne({ value: jobType }).select('id')
    jobTypeId = jobTypeId.id
    let applicantId = await Applicant.query().findOne({ lname: applicant }).select('id')
    applicantId = applicantId.id
    let agencyId = await Organization.query().findOne({ name: agency }).select('id')
    agencyId = agencyId.id
    let investigatorId = await User.query().findOne({ fname: investigator }).select('id')
    investigatorId = investigatorId.id
    let caseStatusTypeId = await LookuplistValue.query().findOne({ value: caseStatus }).select('id')
    caseStatusTypeId = caseStatusTypeId.id
    await Case.query().insert({ jobTypeId, applicantId, agencyId, investigatorId, caseStatusTypeId, jobName, dueDate })
  } catch (err) {
    console.error(err)
  }
}

const promises = cases.map(insertCase)

exports.seed = async (knex) => Promise.all(promises)
