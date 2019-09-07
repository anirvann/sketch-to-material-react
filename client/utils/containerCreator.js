const organismFileName = 'Organism';
const jsonFileName = process.argv[2];
const organism = require('../templates/organism');
const path = require('path');
const fs = require('fs');
const data = require(`../json/${jsonFileName}`);

const writeFileToDisk = require('./fileUtilities');

const document = data.document;
const canvas = document.children[0];
const frames = canvas.children[0];
const molecules = frames.children.sort(function(a,b){
  const yA = a.absoluteBoundingBox.y;
  const yB = b.absoluteBoundingBox.y;
  return yA - yB;
});
const extensionStrippedNames = molecules.map(m => m.name.substring(1, m.name.length).split('_')[0]);
let str = `${organism(
  jsonFileName, 
  extensionStrippedNames, 
  '{}', 
  extensionStrippedNames.map(ml => '<' + ml + '/>').join(''))}`;
writeFileToDisk(path.join(__dirname, '../src/components/organisms', `${organismFileName}.js`), str);
      