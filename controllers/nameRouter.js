require('dotenv').config();
const config = require('../utils/config');
const axios = require('axios');
const nameRouter = require('express').Router();

nameRouter.get('/', async (request, response) => {
  try {
    const names = await axios
      .get(config.NAMES_URL)
      .then((response) => response.data.names);
    response.json(names);
  } catch (error) {
    response.status(404).end();
  }
});

nameRouter.get('/:id', async (request, response) => {
  const names = await axios
    .get(config.NAMES_URL)
    .then((response) => response.data.names);
  const selectedName = names.find(
    (name) => name.name.toLowerCase() === request.params.id.toLocaleLowerCase()
  );
  console.log('selectedName: ', selectedName);
  if (selectedName) {
    response.json(selectedName);
  } else {
    response.status(404).end();
  }
});

module.exports = nameRouter;
