import express from 'express';
import { Request, Response } from 'express';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  res.send('Route');
});

export default route;
