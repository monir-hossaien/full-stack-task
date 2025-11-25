
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server run success on http://localhost:${PORT}`);
    });
});
