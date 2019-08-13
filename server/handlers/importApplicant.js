const xlsx = require('./xlsx')

const AWS = require('aws-sdk')

const fs = require('fs')



const getDataBuffer = async ({ bucket, key }) => {

  try {

    const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

    // import HOME and IS_LOCAL from some config file

    // const { HOME, IS_LOCAL } = config



    const HOME = '/Users/manast' // or wherever



    const IS_LOCAL = false



    const filePath = IS_LOCAL ? `${HOME}/Desktop` : '/tmp'

    const fileName = 'stream'

    const location = `${filePath}/${fileName}`

    const file = fs.createWriteStream(location)



    const params = {

      Bucket: bucket,

      Key: key

    }



    s3.getObject(params)

      .createReadStream()

      .pipe(file)

    return location

  } catch (error) {

    console.error(error)

    return false

  }

}



export default async (event, context) => {

  // context.callbackWaitsForEmptyEventLoop = true

  try {

    const bucket = event.Records[0].s3.bucket.name

    const key = event.Records[0].s3.object.key



    const tmpLocation = await getDataBuffer({ bucket, key })

    if (!tmpLocation) return false // Probs send an error email around this point



    const newApplicant = xlsx.parseFile(tmpLocation)

    console.log({ newApplicant })



    return newApplicant ? 'SUCCESS' : 'FAIL'

  } catch (error) {

    console.log('error')

    console.error(error)

    // Again with the error email

  }

}