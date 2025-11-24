import bcrypt from "bcrypt";
import User from "../models/user.model.js";

// signup
export const signUpService = async (req)=>{
    try{
        const {firstName, lastName, email, password} = req.body;
        if(!email || !password){
            return{ statusCode: 400, status: false, message: "Email and password required"}
        }
        const exits = await User.findOne({email});
        if(exits){
            return {statusCode: 409, status: false, message: "User already exists"};
        }
        // password hashing
        const hashPassword = await bcrypt.hash(password, 12);

        // define user data
        const userData = {
            firstName,
            lastName,
            email,
            password: hashPassword
        }
        const newUser = await User.create(userData);
        if(!newUser){
            return {statusCode: 400, status: false, message: "Registration failed"};
        }
        return {statusCode: 201, status: true, message: "Registration successfully"};
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}
