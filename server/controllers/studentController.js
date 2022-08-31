import fs from 'fs'
import asyncHandler from 'express-async-handler'
import { fileURLToPath } from 'url';
import path from 'path';
import studentModel from '../models/studentModel.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const insertData = asyncHandler(async(req, res) => {
    let dataToInsert = []
    for (let i = 1; i <= 4; i++) {
        const fileDirectory = `${__dirname}/../data/student_${i}.json`
        const data = JSON.parse(fs.readFileSync(fileDirectory, 'utf8'))
        await studentModel.create(data)
    }
    res.status(201).json({message: "Inserted students"})
})

export const deleteData = asyncHandler(async(req, res) => {
    await studentModel.deleteMany({})
    res.json({message: "Deleted students"})
})

export const getStudentById = asyncHandler(async(req, res) => {
    const data = await studentModel.findById(req.params.id)
    res.status(200).json(data)
})