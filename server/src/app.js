import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import businessRouter from './routes/business';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './../../template')));
app.use('/business', businessRouter);

/* app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
}); */
/* app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
}); */

const port = process.env.PORT || 3000;
app.listen(port);
