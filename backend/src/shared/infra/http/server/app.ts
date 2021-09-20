/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import '../../../../scraping/index';
import '../../../container/index';
import '@shared/container';
import createConnection from '../../typeorm/index';
import { router } from '../routes/index.routes';

createConnection();

const app = express();
console.log('app');
app.use(express.json());
app.use(cors());
app.use(router);

export { app };
