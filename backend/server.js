
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server run success on http://localhost:${PORT}`);
});
