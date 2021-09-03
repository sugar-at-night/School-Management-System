import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentsRoutes from "./routes/students.js";
import Connection_url from "./connect.js";

const app = express();
app.use(cors());

app.use(
    express.json({
        limit: "20mb",
        extended: true,
    })
);
app.use(
    express.urlencoded({
        limit: "20mb",
        extended: true,
    })
);

app.use("/students", studentsRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(Connection_url)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Connection is established and running on port: ${PORT}`)
        )
    )
    .catch((err) => console.log(err.message));
