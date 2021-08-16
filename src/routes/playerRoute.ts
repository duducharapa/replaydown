import { Router } from 'express';
import { parseMiddleware, validateMiddleware } from '../middlewares';
import { playerController } from '../controllers';

const router: Router = Router();

router.get("/:id", [ validateMiddleware, parseMiddleware, playerController ]);

export default router;