// src/routes/supportRoutes.ts
import { Router } from 'express';
import { createSupportRequest, getAllSupportRequests, updateSupportRequestStatus } from '../controllers/supportController';
const router = Router();
router.post('/', createSupportRequest);
router.get('/', getAllSupportRequests);
router.patch('/:id', updateSupportRequestStatus);
export default router;