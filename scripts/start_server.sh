yarn --cwd common/dist link
yarn --cwd server/dist link common
source sendgrid.env
node --input-type=module dist/index.js 