const XLSX = require('xlsx')



export const parseFile = (buffer) => {

  try {

    const workbook = XLSX.readFile(buffer)

    return read(workbook)

  } catch (ex) {

    console.error('ERROR: parseStream - ', ex)

    return false

  }

}



const tabs = ['applicant']



const read = (workbook) => {

  try {

    return tabs.reduce((result, tab) => ({

      ...result,

      [tab]: XLSX.utils.sheet_to_json(workbook.Sheets[tab])

    }), {})

  } catch (ex) {

    console.error('ERROR: read - ', ex)

    return false

  }

}