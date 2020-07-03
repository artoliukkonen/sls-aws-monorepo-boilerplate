# sls-ts-monorepo-boilerplate

aka. boilerplate for Serverless Framework projects, with typescript support & monorepo approach.

## Notes

- `name` from the root `package.json` is used as a prefix for all serverless services
- `services/common` project contains DynamoDB resource block for single table design, uncomment it to deploy the table
- `services/` contain all microservices (e.g. `user`, `post`, `whatever`)
- `frontend` contains CRA app (feel free to re-init with latest versions, however remember to maintain `package.json` scripts
