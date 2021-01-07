yarn --cwd common link
yarn --cwd server link common
node --input-type=module dist/src/index.js 