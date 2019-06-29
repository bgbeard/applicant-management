const { PersonalReference, Applicant, LookuplistValue } = require("../../models");

const personalReferences = [
    { applicant: "Vasquez", personalReferenceType: "personal", title: null, fname: "Peter", lname: "Parker", email: "slinger@web.com", "phone": null, relationship: "friend", company: "Daily Bugle", address1: null, address2: null, city: null, state: null, zip: null },
    { applicant: "Vasquez", personalReferenceType: "employment", title: "Sgt", fname: "Eddie", lname: "LaFlamme", email: "eagerLoader@orm.com", "phone": null, relationship: "superior", company: "Aon", address1: null, address2: null, city: null, state: null, zip: null },
    { applicant: "Park", personalReferenceType: "employment", title: null, fname: "Donna", lname: "Summer", email: "singer@stage.com", "phone": null, relationship: "colleague", company: "Motown Records", address1: null, address2: null, city: null, state: null, zip: null }
];

const insertPersonalReference = async ({ applicant, personalReferenceType, title, fname, lname, email, phone, relationship, company, address1, address2, city, state, zip }) => {
    try {
        await PersonalReference.query().del();
        const applicantId = await Applicant.query().findOne({ lname: applicant }).select("id");
        const referenceTypeId = await LookuplistValue.query().findOne({ value: personalReferenceType }).select("id");
        await PersonalReference.query().insert({ applicantId, referenceTypeId, title, fname, lname, email, phone, relationship, company, address1, address2, city, state, zip });
    } catch (err) {
        // console.error(err);
    }
}

const promises = personalReferences.map(insertPersonalReference);

exports.seed = async (knex) => Promise.all(promises);