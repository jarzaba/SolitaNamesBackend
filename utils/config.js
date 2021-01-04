require('dotenv').config();

let PORT = process.env.PORT || 3001;
let NAMES_URL =
  'https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json';

module.exports = {
  NAMES_URL,
  PORT,
};
