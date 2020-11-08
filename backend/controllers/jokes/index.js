const fs = require('fs');

const files = fs.readdirSync(__dirname);

files.forEach(file => {
  const name = file.replace('.js', '');
  if (name !== 'index') exports[name] = require(`./${name}`);
});
