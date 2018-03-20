import express from 'express';
import businessController from '../controllers/business';
import userController from '../controllers/user';
import businessValidator from '../validator/businessValidator';
import userValidator from '../validator/userValidator';


const businessRouter = express.Router();

businessRouter.get('/', businessValidator.queryBusinessByCategory, businessValidator.queryBusinessByLocation, businessController.getAllBusiness);

businessRouter.post('/', businessValidator.createBusiness, businessController.createBusiness);

businessRouter.get('/:id', businessController.getBusiness);

businessRouter.put('/:id', businessController.updateBusiness);

businessRouter.delete('/:id', businessController.deleteBusiness);

businessRouter.get('/:id/reviews', businessController.getReviews);

businessRouter.post('/:id/reviews', businessValidator.createReview, businessController.createReviews);

export default businessRouter;
