import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Generate short-lived access token
export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" } // 15 minutes
  );
};

// Generate long-lived refresh token
export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" } // 7 days
  );
};

// Verify access token
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return null;
  }
};

// Verify refresh token
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return null;
  }
};
