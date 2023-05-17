import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
})

const studentModel = mongoose.model('students', studentSchema)
export default studentModel