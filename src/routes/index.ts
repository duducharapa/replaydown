import { Router } from 'express';
import PlayerRoute from './playerRoute';

const router: Router = Router();

router.use('/players', PlayerRoute);

export default router;