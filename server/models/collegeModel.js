import mongoose from 'mongoose'

const collegeSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
            maxLength: 160
      },
      year_founded: {
            type: Number,
            required: true,
      },
      city: {
            type: String,
            required: true,
            maxLength: 25
      },
      state: {
            type: String,
            required: true
      },
      country: {
            type: String,
            required: true
      },
      no_of_students: {
        type: Number,
        required: true, 
        default: 0
      },
      courses: [String],
      date: {
            type: Date,
            default: Date.now()
      }
})

const College = mongoose.model('College', collegeSchema)
export default College