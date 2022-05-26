import * as express from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { Routes } from './routes';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {})
  .catch((error) => console.log(error));

// create and setup express app
const app = express();
app.use(express.json());

// start express server
app.listen(3000);
console.log(
  'Express server has started on port 3000. Open http://localhost:3000/users to see results',
);
