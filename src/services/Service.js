import models from "../models/index.js";

class Service {
  constructor(modelName) {
    this.model = models[modelName];
  }
  async create(data) {
    return this.model.create(data);
  }
  async getAll() {
    return this.model.find();
  }
  async getById(id) {
    return this.model.findById(id);
  }
  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

export default Service;