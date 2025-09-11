import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
  }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { versionKey: false});

const List = mongoose.model("List", listSchema);

export default List;