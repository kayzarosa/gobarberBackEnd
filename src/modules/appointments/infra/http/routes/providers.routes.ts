import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ListProviderController from '@modules/appointments/infra/http/controllers/ListProviderController';

const providersRouter = Router();
const listProviderController = new ListProviderController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', listProviderController.index);

export default providersRouter;
