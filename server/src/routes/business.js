import express from 'express';
import businessController from '../controllers/business';

const businessRouter = express.Router();

businessRouter.get('/', businessController.getAllBusiness);

businessRouter.post('/', businessController.postBusiness);

businessRouter.get('/:id', businessController.getBusiness);


businessRouter.put('/:id', businessController.updateBusiness);

businessRouter.delete('/:id', businessController.deleteBusiness);

export default businessRouter;
