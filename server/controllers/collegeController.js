import fs from 'fs'
import asyncHandler from 'express-async-handler'
import { fileURLToPath } from 'url';
import path from 'path';
import collegeModel from '../models/collegeModel.js'
import {states, courses} from '../data/states.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileDirectory = `${__dirname}/../data/college_data.json`

export const insertData = asyncHandler(async(req, res) => {
    const data = JSON.parse(fs.readFileSync(fileDirectory, 'utf8'))
    const colleges = await collegeModel.create(data)
    res.status(201).json(colleges)
})

export const deleteData = asyncHandler(async(req, res) => {
    await collegeModel.deleteMany({})
    res.json({message: "Deleted colleges"})
})

export const getCollegeById = asyncHandler(async(req, res) => {
    const data = await collegeModel.findById(req.params.id)
    res.status(200).json(data)
})

export const getBasedonLocation = asyncHandler(async(req, res) => {
    const data = await collegeModel.find({state: req.params.state})
    res.status(200).json(data)
})

export const getColleges = asyncHandler(async(req, res) => {
    const data = await collegeModel.find()
    res.status(200).json(data)
})

export const getCountofStates = asyncHandler(async(req, res) => {
    var arr = []
    for (const state of states){
        const data = await collegeModel.count({state: state})
        arr.push({"type" : state, "value": data})
    }
    res.status(200).json(arr)
})

export const getCountByCourses = asyncHandler(async(req, res) => {
    var arr = []
    for(const course of courses){
        const data = await collegeModel.count({ 
            "courses": course
         }); 
         arr.push({"type" : course, "value": data})
    }
    res.status(200).json(arr)
})

export const getCollegeByCourse = asyncHandler(async(req, res) => {
    const data = await collegeModel.find({courses: { $elemMatch: {$eq: req.params.course} }})
    res.status(200).json(data)
})
