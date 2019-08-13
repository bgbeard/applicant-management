const XLSX = require('xlsx')


export const parseFile = location => {
  try {
    const relativePath = '.' + location
    const workbook = XLSX.readFile(relativePath)
    testSheet(workbook)
    return applicantData(workbook)
  }
  catch (err) {
    console.error('ERROR in parseFile(): ', err)
    return false
  }
}

const tabs = ['applicant', 'references']

const applicantData = aWorkbook => {
  try {
    return tabs.reduce((result, tab) => ({
      ...result,
      [tab]: XLSX.utils.sheet_to_json(aWorkbook.Sheets[tab])
    }), {})
  }
  catch (err) {
    console.error('ERROR in applicantData(): ', err)
    return false
  }
}

const testSheet = (aWorkbook) => {
  aWorkbook.SheetNames.forEach(sheet => console.log(sheet))
}