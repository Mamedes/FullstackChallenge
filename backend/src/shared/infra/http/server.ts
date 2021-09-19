import express from 'express';
import routes from './routes';
import   './../../../scraping/index';
const app = express();

app.use(routes);

app.listen(3333, () => {
    console.log('🛠🛠🛠  server started on port 3333  ');
});
