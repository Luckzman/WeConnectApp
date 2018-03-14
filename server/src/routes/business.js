import express from 'express';
import business from '../models/business';

const businessRouter = express.Router();

businessRouter.get('/', (req, res) => {
  res.send(business);
});

businessRouter.post('/', (req, res) => {
  res.status(200).json({ message: 'post request to register a business' });
});

businessRouter.get('/:id', (req, res) => {
  res.status(200).json({ message: 'get t to get a particular business' });
});


businessRouter.put('/:id', (req, res) => {
  res.status(200).json({ message: 'put request to update business' });
});

businessRouter.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'delete request to remove a business' });
});

export default businessRouter;
