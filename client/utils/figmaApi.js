require('dotenv').config({
  path: '../.env'
});

const fetch = require('node-fetch');
const path = require('path');
const writeFileToDisk = require('./fileUtilities');


const headers = new fetch.Headers();
const devToken = process.env.API_TOKEN;
const fileName = process.argv[3] || 'figmaData';
headers.append('X-Figma-Token', devToken);

const fileKey = process.argv[2];
const baseUrl = 'https://api.figma.com';

async function main() {
  let resp = await fetch(`${baseUrl}/v1/files/${fileKey}`, {headers});
  let data = await resp.json();
  writeFileToDisk(path.join(__dirname, '../json/', `${fileName}.json`), JSON.stringify(data, null, 2))
}

main().catch((err) => {
  console.error(err);
  console.error(err.stack);
});
