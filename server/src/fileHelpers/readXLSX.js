const XLSX = require('xlsx')


//return array of objects
const read = (file) => {
    const result = {}

    const workbook = XLSX.readFile(file)

    tabs.forEach(tabName => {
        result[tabName] = XLSX.utils.sheet_to_json(workbook.Sheets[tabName])
    })

    return result
}

const tabs = ['applicant', 'references']

module.exports = {
    read
}