import mongoose from "mongoose"
import studentModel from "./models/student.model.js"
import courseModel from "./models/course.model.js"

const uri = "mongodb+srv://coder:coder@cluster0.yd7kuoh.mongodb.net/"

const main = async() => {
    await mongoose.connect(uri, {
        dbName: 'mondo_advanced'
    })
    console.log('DB connected!')

    // await studentModel.create({
    //     first_name: "Lautaro",
    //     last_name: 'Melillo'
    // })

    // await courseModel.create({
    //     title: "Backend con NodeJs",
    //     description: "An awesome course for developers",
    //     difficulty: 5,
    //     professor: 'Alex Marin'
    // })

    // const student = await studentModel.findOne({ _id: "6464e33241b82ebbbb9c7e05"})
    // student.courses.push({ course: "6464e39fa11fb890ce76154f" })
    // const result = await studentModel.updateOne({ _id: '6464e33241b82ebbbb9c7e05'}, student)
    // console.log(result)

    // const student = await studentModel.findOne({ _id: "6464e33241b82ebbbb9c7e05"}).populate('courses.course')
    const student = await studentModel.findOne({ _id: "6464e33241b82ebbbb9c7e05"})
    console.log(JSON.stringify(student, null, '\t'))
}

main()