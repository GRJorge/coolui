import express from 'express';
import controller from '../controllers/user'

const router = express.Router();

router.post('/new', controller.saveUser);

export default router;
