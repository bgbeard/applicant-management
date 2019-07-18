require('dotenv').config()
import { transaction } from 'objection'
import { Applicant, LookuplistValue, PersonalReference } from '../models'


const getAllLookuplistValues = async () => {
    try {
        return await LookuplistValue.query()
    } catch (err) {
        console.error(err)
    }
}

export const insertApplicant = async (excelRead) => {
    try {
        const graph = excelRead.applicant[0]
        graph.personalReferences = excelRead.references
        console.log(graph)
        return await transaction(Applicant.knex(), async (trx) => {
            return (
                Applicant.query(trx)
                    .insertGraph(graph)
            )
        })

    } catch (err) {
        return err.message
    }
}

export const insertReference = async (excelRead) => {
    try {
        const llvs = getAllLookuplistValues()
        const graph = excelRead.references.map(reference => {
            // reference.personalReferenceTypeId = llvs.filter((llv) => {
            //     llv.value === reference.personalReferenceType
            // })
            // delete reference.personalReferenceType
        })
        // console.log(llvs.length)
        //array of LLV objects
        return llvs
        // return await transaction(PersonalReference.knex(), async (trx) => {
        //     return (
        //         PersonalReference.query(trx)
        //             .insertGraph(graph)
        //     )
        // })
    }
    catch (err) {
        return err.message
    }
}