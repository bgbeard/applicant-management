const xlsx = require('../helpers/xlsxReader')
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-west-1' })
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

export default async (event, context) => {
  // context.callbackWaitsForEmptyEventLoop = true
  try {
    console.log('start')
    const params = {
      Bucket: event.Records[0].s3.bucket.name,
      Key: event.Records[0].s3.object.key
    }
    const stream = await s3.getObject(params, (err, data) => {
      console.log('getObject start')
      if (err) {
        console.error('ERROR: ', err)
      } else {
        console.log('data running')
      }
    }).createReadStream()
    console.log('stream created')
    const newApplicant = xlsx.parseStream(stream)
    console.log(newApplicant)
    console.log('end')
    return 'end of function'
  }
  catch (ex) {
    console.error(ex)
  }
}

// const filePath = `https://import-applicant.s3-us-west-1.amazonaws.com/${event.Records[0].s3.object.key}`