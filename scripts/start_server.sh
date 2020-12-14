cd ../packages/common && yarn link
cd ../server && yarn link common
node dist/src/index.js