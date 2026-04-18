import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    clientId: {
      type: String,
      required: true
    },
    permissions: [
      {
        type: String, // keeping simple (no need ObjectId for now)
        required: true
      }
    ]
  },
  { timestamps: true }
);

// prevent duplicate role per client
roleSchema.index({ name: 1, clientId: 1 }, { unique: true });

export default mongoose.model("Role", roleSchema);