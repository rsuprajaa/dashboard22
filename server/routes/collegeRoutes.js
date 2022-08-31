import express from 'express'
import {insertData, deleteData, getCollegeById, getBasedonLocation} from '../controllers/collegeController.js'

const router = express.Router()
router.route('/').post(insertData).delete(deleteData)
router.route('/:id').get(getCollegeById)
router.route('/find/location/:state').get(getBasedonLocation)

export default router
