import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
            maxLength: 160
      },
      year_of_batch: {
            type: Number,
            required: true,
      },
      college_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'colleges'
      },
      skills: [String],
      date: {
            type: Date,
            default: Date.now()
      }
})

const Student = mongoose.model('Student', studentSchema)
export default Student