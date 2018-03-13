import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, './../../template')));

const port = process.env.PORT || 3000;
app.listen(port);
