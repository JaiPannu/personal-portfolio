import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ success: true, data: projects });
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Get single project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, data: project });
    } catch (error) {
        console.error('Error fetching project:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Create new project
router.post('/', async (req, res) => {
    const project = req.body;

    if (!project.title || !project.description || !project.image) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({ success: true, data: newProject });
    } catch (error) {
        console.error('Error creating project:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Update project
router.put('/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, data: updatedProject });
    } catch (error) {
        console.error('Error updating project:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Delete project
router.delete('/:id', async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, message: 'Project deleted' });
    } catch (error) {
        console.error('Error deleting project:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
