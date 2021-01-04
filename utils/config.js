require('dotenv').config();

let PORT = process.env.PORT || 3001;
let NAMES_URL = process.env.NAMES_URL;

module.exports = {
  NAMES_URL,
  PORT,
};
