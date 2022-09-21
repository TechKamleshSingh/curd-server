import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.hbv6j.mongodb.net/?retryWrites=true&w=majority`;
               
    try {
        await mongoose.connect(URL)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Error while connecting with database', error)
    }
}

export default Connection