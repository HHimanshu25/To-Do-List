import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    date: {
        type: Date
    },

    time: {
        type: String
    },

    priority: {
        type: String

    },

    category: {
        type: String
    },

    completed: {
        type: Boolean,
        default: false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    
}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);