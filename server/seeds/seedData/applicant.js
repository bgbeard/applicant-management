const { Applicant } = require('../../models')

const applicants = [
  { fname: 'Jose', lname: 'Vasquez', email: 'jvasquez@gmail.com', phone: '(213) 897-9437', ss: '123-45-6789', dob: '1988/01/12', address1: '123 Right Side Way', address2: null, city: 'Santa Ana', state: 'CA', zip: '91304' },
  { fname: 'Susy', lname: 'Park', email: 'spark@gmail.com', phone: '(949) 917-8414', ss: '123-45-6789', dob: '1990/09/21', address1: '456 Left Side Ave', address2: null, city: 'Santa Monica', state: 'CA', zip: '90907' }
]

const insertApplicant = async ({ fname, lname, email, phone, ss, dob, address1, address2, city, state, zip }) => {
  try {
    await Applicant.query().insert({ fname, lname, email, phone, ss, dob, address1, address2, city, state, zip })
  } catch (err) {
    console.error(err);
  }
}

const promises = applicants.map(insertApplicant)

exports.seed = async (knex) => Promise.all(promises)
