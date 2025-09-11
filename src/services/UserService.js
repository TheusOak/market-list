import Service from "./Service.js";

class UserService extends Service {
  constructor() {
    super("User");
  }

  async getByEmail(email) {
    return this.model.findOne({ email });
  }

  async deleteByEmail(email) {
    return this.model.findOneAndDelete({ email });
  }

  async getByUsername(username) {
    return this.model.findOne({ username });
  }
}

export default UserService;