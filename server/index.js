'use strict'

const xlsx = require('./src/fileHelpers/readXLSX')
import { insertApplicant, getAllApplicants } from './src/database/applicant'

const fileContent = xlsx.read('./src/content/testUpload.xlsx')
let newApplicant = fileContent.applicant[0]

insertApplicant(newApplicant)
    .then(res => console.log(res))
    .catch(err => console.error(err))




// getAllApplicants(1)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.error(err))

