import Service from "./Service.js";

class ListService extends Service {
  constructor() {
    super("List");
  }

  async getByUserId(userId) {
    return this.model.find({ userId });
  }

  async deleteByUserId(userId) {
    return this.model.deleteMany({ userId });
  }

  async markAsCompleted(id) {
    return this.model.findByIdAndUpdate(id, { completed: true }, { new: true });
  }

  async markAsPending(id) {
    return this.model.findByIdAndUpdate(id, { completed: false }, { new: true });
  }
}

export default ListService;