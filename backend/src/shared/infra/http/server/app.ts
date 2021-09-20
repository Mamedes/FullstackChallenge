/* eslint-disable import/no-unresolved */
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
// import '../../../../scraping/index';
import '../../../container/index';
import createConnection from '../../typeorm/index';
import { router } from '../routes/index.routes';

import '@shared/container';

import 'dotenv/config';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app };
