import { Router } from 'express';

import userController from '../contollers/user';

const router = Router();

router
.route('/')
.post(userController.postUser);

router
.route('/:username')
.get(userController.getUser);

export default router;
