import express from 'express';
import { addMember, deleteMember, readMembers, updateMember } from '../controllers/members.controller.js';
import { validateAddingMember, validateUpdatingMember } from '../validations/member.validations.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const memberRouter = express.Router();

// memberRouter.post('/', validateAddingMember, authenticate, addMember);
// memberRouter.get('/', authenticate, readMembers);
// memberRouter.put('/:id', validateUpdatingMember, authenticate, updateMember);
// memberRouter.delete('/:id', authenticate, deleteMember);

memberRouter.route('/')
.post(validateAddingMember, authenticate, addMember)
.get(authenticate, readMembers)

memberRouter.route('/:id')
.put(validateUpdatingMember, authenticate, updateMember)
.delete(authenticate, deleteMember)

export default memberRouter;