import { Router, Request, Response } from 'express';
import ResultModel from '../models/Results';

const router = Router();

router.post('/set', async (req: Request, res: Response) => {
  try {
    const result = new ResultModel({
      name: req.body.name,
      time: req.body.time,
      moves: req.body.moves,
    });

    await result.save();
    return res.status(200).json({ message: 'Result upload.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error ' });
  }
});

router.get('/get', async (req: Request, res: Response) => {
  try {
    const result = await ResultModel.find({});

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error ' });
  }
});
export default router;
