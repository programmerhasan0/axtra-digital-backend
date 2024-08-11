import express from "express";
import dotenv from "dotenv";
dotenv.config();

import servicesRouter from "./routes/services.route.js";
import cors from "cors";
import db from "./database/connection.database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/services", servicesRouter);
app.get("/", (req, res, next) => {
    res.status(200);
    res.json({ code: 200, msg: "Server working properly" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
    db.authenticate().then((res) => console.log("success"));
});
