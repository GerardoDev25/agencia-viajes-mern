import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/', router);
app.use(express.static('public'));

app.set('view engine', 'pug');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app running in the port ${port}`);
});
