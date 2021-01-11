yarn --cwd common link
yarn --cwd server link common
node --input-type=module --require dotenv/config dist/index.js 