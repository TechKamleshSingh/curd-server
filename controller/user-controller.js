import userModel from "../schema/user-schema.js";

const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new userModel(user)

    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message : error.message })
    }
}

export default addUser

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const getUser = async (req, res) => {
    try{
        // const user = await userModel.find({_id:req.params.id})
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    }catch (error){
        res.status(404).json({message : error.message})
    }
}

export const editUser = async (req, res) => {
    let user = req.body

    const editUser = new userModel(user)
    try{
        const user = await userModel.findOneAndUpdate({_id: req.params.id}, editUser)
        res.status(200).json({message: "Updated Successfully"})
    }catch (error){
        res.status(409).json({message:error.message})
    }
}


export const deleteUser = async (req, res) => {
    try{
        const user = await userModel.deleteOne({_id:req.params.id})
        res.status(201).json({message : 'User Deleted Successfully'})
    }catch(err){
        res.status(409).json({message: err.message})
    }
}