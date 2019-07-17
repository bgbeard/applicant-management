'use strict'
const xlsx = require('./src/xlsxReader')
import { insertApplicant, insertReference } from './src/insertNewCase'
try {
    const fileContent = xlsx.read('./src/content/testUpload.xlsx')
    // const graph = fileContent.applicant[0]
    // graph.personalReferences = fileContent.references

    // insertApplicant(fileContent)
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err))

    insertReference(fileContent)
        .then(res => console.log(res))
        .catch(err => console.error(err))

    // getAllLookuplistValues()
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err))


} catch (err) {
    console.log(err)
}