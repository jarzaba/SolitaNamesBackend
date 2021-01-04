require('dotenv').config();
import { NAMES_URL } from '../utils/config';
import axios from 'axios';
import { Router } from 'express';

export const nameRouter = Router();

nameRouter.get('/', async (request, response) => {
  try {
    const names = await axios
      .get(NAMES_URL!)
      .then((response) => response.data.names);
    response.json(names);
  } catch (error) {
    response.status(404).end();
  }
});

nameRouter.get('/:id', async (request, response) => {
  const names = await axios
    .get(NAMES_URL!)
    .then((response) => response.data.names);
  const selectedName = names.find(
    (name: { name: string; amount: number }) =>
      name.name.toLowerCase() === request.params.id.toLocaleLowerCase()
  );
  console.log('selectedName: ', selectedName);
  if (selectedName) {
    response.json(selectedName);
  } else {
    response.status(404).end();
  }
});
