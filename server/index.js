'use strict'

// const xlsx = require('./src/fileHelpers/readXLSX')
// const applicantService = require('./src/database/applicant')
import { getAllApplicants } from './src/database/applicant'

let applicants = getAllApplicants(1)
console.log(applicants)


// const fileContent = xlsx.read('./src/content/testUpload.xlsx')
// console.log(fileContent.references[1])