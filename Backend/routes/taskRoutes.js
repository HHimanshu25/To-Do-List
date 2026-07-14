import express from 'express'
import protect from '../middleware/authMiddelware.js'
import { allTask, createTask, deleteTask, getTask, updateTask } from '../controllers/taskController.js'

const router = express.Router()

router.post('/', async(req,res) =>{
    return res.status(200).json({
        message:"task route"
    })
})

router.post("/create", protect, createTask)
router.get('/all', protect, allTask)
router.get('/one/:id', protect, getTask)
router.put('/update/:id', protect, updateTask)
router.delete('/delete/:id',protect, deleteTask)
export default router