import express from 'express'
import {insertData, deleteData, getCollegeById, getBasedonLocation, getColleges, getCountofStates, getCountByCourses, getCollegeByCourse} from '../controllers/collegeController.js'

const router = express.Router()
router.route('/').get(getColleges).post(insertData).delete(deleteData)
router.route('/:id').get(getCollegeById)
router.route('/find/location/:state').get(getBasedonLocation)
router.route('/find/courses/:course').get(getCollegeByCourse)
router.route('/count/state').get(getCountofStates)
router.route('/count/courses').get(getCountByCourses)

export default router
