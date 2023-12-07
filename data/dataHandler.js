// data/dataHandler.js
const fs = require("fs");
const path = require("path");

function readDataFromFile(filename) {
  const filePath = path.join(__dirname, filename);
  try {
    const rawData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(rawData);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function writeDataToFile(filename, data) {
  const filePath = path.join(__dirname, filename);
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, "utf8");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { readDataFromFile, writeDataToFile };
