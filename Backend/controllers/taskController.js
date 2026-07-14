import Task from '../models/Task.js'




export const allTask = async (req, res) => {
    const user = req.user.id

    const task = await Task.find({ user })

    // if (task.length === 0) {
    //     return res.status(404).json({
    //         message: "task not found"
    //     })
    // }

    res.json(task)
}

export const createTask = async (req, res) => {

    if (!req.body.title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    const task = await Task.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        priority: req.body.priority,
        category: req.body.category,
        user: req.user.id
    });

    res.json(task);
}

export const getTask = async (req, res) => {
    const id = req.params.id
    const task = await Task.findOne({
        _id: req.params.id,
        user: req.user.id
    });
    if (task.length === 0) {
        return res.status(404).json({
            message: "sldjfsdljf"
        })
    }
    res.json(task)
}

export const updateTask = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        priority: req.body.priority,
        category: req.body.category,
    },
        {
            new: true

        }
    )
    if (!task) {
        return res.status(404).json({
            message: "task not found"
        })
    }

    res.json(task)
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete({
        _id: req.params.id,
        user: req.user.id
    })


    res.json({
        message: " task delete succesfully"
    })
}   