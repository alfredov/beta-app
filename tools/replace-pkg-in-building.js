const replaceInFiles = require('replace-in-files');

replaceInFiles({
  files: 'packages/**/package.json',
  from: '"main": "src/index.ts"',
  to: '"main": "dist/index.js"',
}).catch(error =>
  console.error('Error fixing bad imports in d.ts files:', error),
);
