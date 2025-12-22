import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Get all contact messages
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find({}).sort({ createdAt: -1 });
        res.json({ success: true, data: messages });
    } catch (error) {
        console.error('Error fetching messages:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Create new contact message
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const newMessage = new Contact({ name, email, message });

    try {
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!', data: newMessage });
    } catch (error) {
        console.error('Error creating message:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Mark message as read
router.put('/:id/read', async (req, res) => {
    try {
        const message = await Contact.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );
        if (!message) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        res.json({ success: true, data: message });
    } catch (error) {
        console.error('Error updating message:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Delete contact message
router.delete('/:id', async (req, res) => {
    try {
        const deletedMessage = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedMessage) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        res.json({ success: true, message: 'Message deleted' });
    } catch (error) {
        console.error('Error deleting message:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
