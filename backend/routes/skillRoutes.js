import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find({});
        res.json({ success: true, data: skills });
    } catch (error) {
        console.error('Error fetching skills:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Get skills by category
router.get('/category/:category', async (req, res) => {
    try {
        const skills = await Skill.find({ category: req.params.category });
        res.json({ success: true, data: skills });
    } catch (error) {
        console.error('Error fetching skills:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Create new skill
router.post('/', async (req, res) => {
    const skill = req.body;

    if (!skill.name || !skill.category) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const newSkill = new Skill(skill);

    try {
        await newSkill.save();
        res.status(201).json({ success: true, data: newSkill });
    } catch (error) {
        console.error('Error creating skill:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Update skill
router.put('/:id', async (req, res) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSkill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.json({ success: true, data: updatedSkill });
    } catch (error) {
        console.error('Error updating skill:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Delete skill
router.delete('/:id', async (req, res) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        if (!deletedSkill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.json({ success: true, message: 'Skill deleted' });
    } catch (error) {
        console.error('Error deleting skill:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
