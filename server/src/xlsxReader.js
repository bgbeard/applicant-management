const XLSX = require('xlsx')

export const read = file => {
    const workbook = XLSX.readFile(file)
    return tabs.reduce((result, tab) => ({
        ...result,
        [tab]: XLSX.utils.sheet_to_json(workbook.Sheets[tab])
    }), {})
}

const tabs = ['applicant', 'references']