import express from "express";
const carsRouter = express.Router();

import CarsController from "../controllers/car.js";

const carsController = new CarsController();

carsRouter.get("/", carsController.getAllCars);
carsRouter.post("/", carsController.createCar);
carsRouter.get("/:id", carsController.getCarDetail);
carsRouter.put("/:id", carsController.updateCar);
carsRouter.delete("/:id", carsController.deleteCar);

export default carsRouter;
