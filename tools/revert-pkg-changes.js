const replaceInFiles = require('replace-in-files');

replaceInFiles({
  files: 'packages/**/package.json',
  from: '"main": "dist/index.js"',
  to: '"main": "src/index.ts"',
}).catch(error =>
  console.error('Error fixing bad imports in d.ts files:', error),
);
