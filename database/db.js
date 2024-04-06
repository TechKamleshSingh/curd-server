import mongoose from "mongoose"

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@crud-app.hbv6j.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@cluster0.l6fljrr.mongodb.net/curd-management?retryWrites=true&w=majority&appName=Cluster0`;
               
    try {
        await mongoose.connect(URL)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Error while connecting with database', error)
    }
}

export default Connection