import JSZip from 'jszip'
import Docxtemplater from 'docxtemplater'
import fs from 'fs'
import path from 'path'

export default function createTemplate(file) {
  try {
    const content = fs.readFileSync(path.resolve(file), 'binary')
    const zip = new JSZip(content)
    const doc = new Docxtemplater()
    doc.loadZip(zip)

    doc.setData({
      ref_fname: 'Bryan',
      ref_lname: 'Beard',
      address1: '11919 Courtleigh Dr Apt 8',
      address2: 'Los Angeles, CA 90066',
      app_name: 'Greg Beard',
      dob: '1954',
      position: 'Police Officer'
      //this should just be the person object
      //what do i always need?
      //applicant
      //case
      //set the data with reference, then add case and applicant data
    })

    doc.render()
    const buf = doc.getZip().generate({ type: 'nodebuffer' })
    fs.writeFileSync(path.resolve('./src/content/output.docx'), buf)
  }
  catch (err) {
    const e = {
      message: err.message,
      name: err.name,
      stack: err.stack,
      properties: err.properties
    }
    console.log(e)
    throw err
  }

}
