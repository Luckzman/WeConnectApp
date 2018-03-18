import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import businessRouter from '../src/routes/business';
import userRouter from '../src/routes/user';


const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, './../../template')));

app.use('/api/v1/business', businessRouter);
app.use('/api/v1/auth', userRouter);

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
