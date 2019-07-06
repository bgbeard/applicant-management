'use strict'

require('dotenv').config()
import { Applicant } from '../../models'
import Knex from 'knex'


export const getAllApplicants = async (id) => {
    try {
        return await Applicant.query().findById(id)
    } catch (err) {
        console.error(err)
    }
}