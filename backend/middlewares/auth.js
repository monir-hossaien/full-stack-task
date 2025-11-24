import {verifyAccessToken} from "../utils/jwt.js";

export const authenticateUser = async (req, res, next) => {

    try{
        // Retrieve token from cookies
        let token = req.cookies?.accessToken;

        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized user. Please login first",
            });
        }
        let decodeToken = await verifyAccessToken(token);
        if (!decodeToken) {
            return res.status(401).send({status: false, message:"Invalid or expired token. Please log in again."});
        }else{
            req.headers.email = decodeToken.email;
            req.headers.id = decodeToken.id;
            next()
        }
    }catch (e) {
        return e.message;
    }
}