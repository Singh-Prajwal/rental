import { Request, Response } from 'express';
import SupportRequest from '../models/SupportRequest';
export const createSupportRequest = async (req: Request, res: Response) => {
try {
const newRequest = new SupportRequest(req.body);
await newRequest.save();
res.status(201).json(newRequest);
} catch (error) { res.status(400).json({ message: 'Error creating support request', error }); }
};
export const getAllSupportRequests = async (req: Request, res: Response) => {
try {
const requests = await SupportRequest.find().sort({ createdAt: -1 });
res.status(200).json(requests);
} catch (error) { res.status(500).json({ message: 'Error fetching requests', error }); }
};
export const updateSupportRequestStatus:any = async (req: Request, res: Response) => {
try {
const { status } = req.body;
const request = await SupportRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
if (!request) return res.status(404).json({ message: 'Request not found' });
res.status(200).json(request);
} catch (error) { res.status(400).json({ message: 'Error updating status', error }); }
};