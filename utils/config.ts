require('dotenv').config();

let PORT = process.env.PORT || 3100;
let NAMES_URL =
  'https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json';

export default {
  NAMES_URL,
  PORT,
};
