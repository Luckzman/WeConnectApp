import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import Router from '../server/routes/index';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, './../template')));

app.use('/', Router);

app.use((req, res, next) => {
  const error = new Error('Incorect URL - Please Check!');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
const port = process.env.PORT || 3000;
app.listen(port);
