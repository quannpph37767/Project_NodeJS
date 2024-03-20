import Car from "../models/CarModel.js";

class CarsController {
  // Get/cars
  async getAllCars(req, res) {
    try {
      const cars = await Car.find();
      res.status(200).json({
        message: "Get All Cars Done",
        data: cars,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // Get /car/:id
  async getCarDetail(req, res) {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) {
        return res.status(404).json({
          message: "Car not found",
        });
      }
      res.status(200).json({
        message: "Get Car Detail Done",
        data: car,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // Post /cars
  async createCar(req, res) {
    console.log(req.body);
    try {
      const car = await Car.create(req.body);
      res.status(200).json({
        message: "Create Car Done",
        data: car,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // PUT /cars/:id
  async updateCar(req, res) {
    try {
      const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!car) {
        return res.status(404).json({
          message: " Car Not Found",
        });
      }
      res.status(200).json({
        message: "Update Car Done",
        data: car,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // DELETE /cars/:id
  async deleteCar(req, res) {
    try {
      const car = await Car.findByIdAndDelete(req.params.id);
      if (!car) {
        return res.status(404).json({
          message: " Car Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Car Done",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
export default CarsController;
