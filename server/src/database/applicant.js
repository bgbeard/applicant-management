'use strict'

require('dotenv').config()
import { Applicant } from '../../models'


export const getAllApplicants = async (id) => {
    try {
        let applicant = await Applicant.query().findById(id)
        return applicant
    } catch (err) {
        console.error(err)
    }
}

export const insertApplicant = async (applicant) => {
    try {
        let result = await Applicant.query().insert(applicant)
        return result
    } catch (err) {
        console.error(err)
    }
}