import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});