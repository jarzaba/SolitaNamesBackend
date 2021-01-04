require('dotenv').config();

let PORT = process.env.PORT;
let NAMES_URL = process.env.NAMES_URL;

module.exports = {
  NAMES_URL,
  PORT,
};
