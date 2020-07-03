# sls-aws-monorepo-boilerplate

aka. boilerplate for Serverless Framework projects, with typescript support & monorepo approach. This boilerplate uses [Lerna](https://github.com/lerna/lerna) and Yarn Workspaces to enable easier deployments & dependency management. 

CI/CD is handled by CircleCI, but it can be easily swapped. Other examples coming soon.

## Setup

- Run `yarn` in root. This will install all dependencies.
- Change `name` in `package.json` to match your service
- That's it!

## Notes

- `name` from the root `package.json` is used as a prefix for all serverless services
- `services/common` project contains DynamoDB resource block for single table design, uncomment it to deploy the table
- `services/` contain all microservices (e.g. `user`, `post`, `whatever`)
- `frontend` contains CRA app (feel free to re-init with latest versions, however remember to maintain `package.json` scripts

## TODO

- Provide branches for different CI/CD approaches
