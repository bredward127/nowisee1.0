const fs = require('fs');

const content = fs.readFileSync('src/data.ts', 'utf8');

// I need to strip categories 3 through 8.
// The easiest way is to use regex or string split.
const start3 = content.indexOf('// CATEGORY 3:');
const start9 = content.indexOf('// CATEGORY 9:');

if (start3 !== -1 && start9 !== -1) {
  const newContent = content.substring(0, start3) + content.substring(start9);
  fs.writeFileSync('src/data.ts', newContent);
  console.log('Successfully removed categories 3 to 8.');
} else {
  console.log('Could not find categories');
}
