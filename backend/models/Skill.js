import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Other'],
    },
    proficiency: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    },
    icon: {
        type: String,
    },
}, {
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
