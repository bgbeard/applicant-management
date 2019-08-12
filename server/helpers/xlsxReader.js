const XLSX = require('xlsx')


export const parseStream = stream => {
  try {
    console.log('begin stream read')
    const buffers = []
    stream.on('data', data => buffers.push(data))
    stream.on('end', () => {
      console.log('end event')
      const buffer = Buffer.concat(buffers)
      const workbook = XLSX.read(buffer, { type: 'buffer' })
      const result = read(workbook)
      console.log('end stream read')
      return result
    })
  }
  catch (ex) {
    console.error('ERROR: parseStream - ', ex)
    return ex
  }
}

const tabs = ['applicant']

const read = workbook => {
  try {
    console.log('begin part workbook contents')
    return tabs.reduce((result, tab) => ({
      ...result,
      [tab]: XLSX.utils.sheet_to_json(workbook.Sheets[tab])
    }), {})
  }
  catch (ex) {
    console.error('ERROR: read - ', ex)
    return ex
  }
}

