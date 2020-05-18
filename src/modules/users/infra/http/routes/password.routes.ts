import { Router } from 'express';

import ForgetPasswordController from '@modules/users/infra/http/controllers/ForgetPasswordController';
import ResetPasswordController from '@modules/users/infra/http/controllers/ResetPasswordController';

const passwordRouter = Router();
const forgetPasswordController = new ForgetPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgetPasswordController.create);

passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
