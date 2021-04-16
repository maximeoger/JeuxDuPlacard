yarn --cwd dist/common link
yarn --cwd dist/server link common
source sendgrid.env
node --input-type=module --require dotenv/config dist/server/src/index.js 