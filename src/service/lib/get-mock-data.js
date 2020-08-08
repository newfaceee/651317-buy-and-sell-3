'use strict';
const fs = require(`fs`);
const FILE_NAME = require(`../../constants`);


let data = null;

const getMockData = async () => {
  if (data.length > 0) {
    return data;
  }

  try {
    const fileContent = await fs.readFile(`../${FILE_NAME}`);
    data = JSON.parse(fileContent);
  } catch (err) {
    throw new Error(`Can't get data from file, err: ${err}`);
  }
  return data;
};

module.exports = getMockData;
