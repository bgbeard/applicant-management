const xlsx = require('./xlsx')
const AWS = require('aws-sdk')
const fs = require('fs')
AWS.config.update({ region: 'us-west-1' })

const HOME = 'C:/Users/beard'
const IS_LOCAL = false

const tmpFile = ({ bucket, key }) =>
  (new Promise((resolve, reject) => {
    try {
      const s3 = new AWS.S3({ apiVersion: '2006-03-01' })
      const filePath = IS_LOCAL ? `${HOME}/Desktop` : '/tmp'
      const fileName = 'stream.xlsx'
      const location = `${filePath}/${fileName}`
      const file = fs.createWriteStream(location)

      const params = {
        Bucket: bucket,
        Key: key
      }
      s3.getObject(params)
        .createReadStream()
        .pipe(file)
        .on('close', () => resolve(location))

    } catch (err) {
      console.error('ERROR in tmpFile(): ', err)
      reject(false)
    }
  })
  )

export default async (event, context) => {
  try {
    const bucket = event.Records[0].s3.bucket.name
    const key = event.Records[0].s3.object.key

    const tmpLocation = await tmpFile({ bucket, key })
    if (!tmpLocation) return false //to do: send error email

    const newApplicant = xlsx.parseFile(tmpLocation)
    console.log({ newApplicant })

    return newApplicant ? 'SUCCESS' : 'FAIL'
  }
  catch (err) {
    console.error('ERROR: ', err)
    //to do: send error email
  }
}