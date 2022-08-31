import express from 'express'
import {insertData, deleteData, getStudentById} from '../controllers/studentController.js'

const router = express.Router()
router.route('/').post(insertData).delete(deleteData)
router.route('/:id').get(getStudentById)

export default router
