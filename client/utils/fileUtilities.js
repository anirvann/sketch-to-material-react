const fs = require('fs');

const writeFileToDisk = function(path, content) {
  fs.writeFileSync(path, content);
};

module.exports =  writeFileToDisk;