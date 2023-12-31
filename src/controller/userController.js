import { emit } from "nodemon";
import userService from "../service/userService"
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    //console.log(username)
    //check username exist
    // compare password
    //return userInfor
    //access_token:JWT  
    return res.status(200).json({
        userData
    })
}
let handleLogin1 = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userService.handlePatientLogin(email, password);
    //console.log(username)
    //check username exist
    // compare password
    //return userInfor
    //access_token:JWT  
    return res.status(200).json({
        userData
    })
}
module.exports = {
    handleLogin, handleLogin1
}