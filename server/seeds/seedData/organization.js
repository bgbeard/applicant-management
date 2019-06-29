const { Organization, LookuplistValue } = require("../../models");

const organizations = [
    { organizationType: "Police Department", parentOrganizationId: null, name: "Irvine Police Department", address1: "1 Horsey Cop Lane", address2: null, city: "Irvine", state: "CA", zip: "92606" },
    { organizationType: "Police Department", parentOrganizationId: null, name: "Santa Ana Police Department", address1: "32 Handcuff Cir", address2: null, city: "Santa Ana", state: "CA", zip: "91408" },
    { organizationType: "Fire Department", parentOrganizationId: null, name: "Santa Monica Fire Department", address1: "1800 Fire Guys Blvd", address2: null, city: "Santa Monica", state: "CA", zip: "90068" }
];

const insertOrganization = async ({ organizationType, parentOrganizationId, name, address1, address2, city, state, zip }) => {
    try {
        await Organization.query().del();
        const organizationTypeId = await LookuplistValue.query().findOne({ value: organizationType }).select("id");
        await Organization.query().insert({ organizationTypeId, parentOrganizationId, name, address1, address2, city, state, zip });
    } catch (err) {
        // console.error(err);
    }
}

const promises = organizations.map(insertOrganization);

exports.seed = async (knex) => Promise.all(promises);