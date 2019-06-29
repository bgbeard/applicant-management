const { AgencyReference, LookuplistValue, Applicant, Organization } = require("../../models");

const agencyReferences = [
    { agencyReferenceType: "applied", applicant: "Vasquez", agency: "Irvine Police Department", appliedPosition: "Police Officer", appliedInvestigator: "Patrick Star", appliedDate: "2019/04/18" },
    { agencyReferenceType: "check", applicant: "Vasquez", agency: "Santa Ana Police Department", appliedPosition: null, appliedInvestigator: null, appliedDate: null },
    { agencyReferenceType: "applied", applicant: "Park", agency: "Santa Monica Fire Department", appliedPosition: "Firefighter", appliedInvestigator: "Sandy Squirrel", appliedDate: "2019/3/21" },
    { agencyReferenceType: "check", applicant: "Park", agency: "Santa Ana Police Department", appliedPosition: null, appliedInvestigator: null, appliedDate: null },
];

const insertAgencyReference = async ({ agencyReferenceType, applicant, agency, appliedPosition, appliedInvestigator, appliedDate }) => {
    try {
        await AgencyReference.query().del();
        const agencyReferenceTypeId = await LookuplistValue.query().findOne({ value: agencyReferenceType }).select("id");
        const agencyId = await Organization.query().findOne({ name: agency }).select("id");
        const applicantId = await Applicant.query().findOne({ lname: applicant }).select("id");
        await AgencyReference.query().insert({ agencyReferenceTypeId, applicantId, agencyId, appliedPosition, appliedInvestigator, appliedDate });
    } catch (err) {
        // console.error(err);
    }
}

const promises = agencyReferences.map(insertAgencyReference);

exports.seed = async (knex) => Promise.all(promises);