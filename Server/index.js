import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import router from "./routes/user.routes.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api",router);

connectdb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port no: ${PORT}`);

        })
    })
    .catch((err) => {
        console.log("Mongo and server connection failed!!!!!", err);
    })