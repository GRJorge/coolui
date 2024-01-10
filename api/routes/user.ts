import express from 'express';
import controller from '../controllers/user'

const router = express.Router();

router.post('/new', controller.saveUser);
router.get('/get', controller.getAll)

export default router;
