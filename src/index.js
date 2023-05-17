import mongoose from "mongoose"
import userModel from "./models/user.model.js"

const uri = "mongodb+srv://coder:coder@cluster0.yd7kuoh.mongodb.net/"

const main = async() => {
    await mongoose.connect(uri, {
        dbName: 'mondo_advanced'
    })
    console.log('DB connected!')

    const response = await userModel.find().explain('executionStats')
    console.log(response)
}

main()