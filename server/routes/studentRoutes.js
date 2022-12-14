import express from 'express'
import {insertData, deleteData, getStudentById, getStudentsByCollege} from '../controllers/studentController.js'

const router = express.Router()
router.route('/').post(insertData).delete(deleteData)
router.route('/:id').get(getStudentById)
router.route('/college/:id').get(getStudentsByCollege)

export default router
