# applicant-management
This is a project for a police background investigation business. The first phase of any police background 
is a highly manual sorting of form data supplied by the applicant. This data is converted to a long list of 
potential references with different rules for contacting. This project is my attempt at automating this process.

The plan is to manage new applicants with an excel spreadsheet. This spreadsheet is uploaded to an S3 bucket 
where a Lambda function (Node environment) will parse it and add new applicant data to a Postgres database with Knex/Objection. 
Then another Lambda will create questionnaire templates for each applicant reference drawn from Postgres. A third
Lambda will send email notifications to all recipients with the questionnaire attached through SendGrid.
