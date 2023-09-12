import express from 'express';
import { addMember } from '../controllers/members.controller.js';
import { validateAddingMember } from '../validations/member.vallidations.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const memberRouter = express.Router();

memberRouter.post('/', validateAddingMember, authenticate, addMember);

export default memberRouter;