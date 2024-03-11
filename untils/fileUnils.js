const fs = require('fs');

async function readFileAsync(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  }
  catch(err) {
    return {};
  }
}

async function writeFileAsync(filePath, data){
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
  }
  catch(err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  readFileAsync,
  writeFileAsync,
}