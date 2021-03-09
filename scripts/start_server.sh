yarn --cwd common link
yarn --cwd server link common
source sendgrid.env
node --input-type=module --require dotenv/config dist/server/src/index.js 