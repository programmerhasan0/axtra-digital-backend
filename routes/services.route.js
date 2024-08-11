import { Router } from "express";
import {
    getServicesData,
    createServicesData,
    updateServicesData,
    deleteServicesData,
} from "../controllers/services.controller.js";

const servicesRouter = Router();
servicesRouter.get("/all", getServicesData);
servicesRouter.post("/create", createServicesData);
servicesRouter.put("/update", updateServicesData);
servicesRouter.delete("/delete", deleteServicesData);

export default servicesRouter;
