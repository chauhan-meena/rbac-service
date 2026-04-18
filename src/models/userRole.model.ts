import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    tenantId: {
      type: String,
      required: true
    },
    clientId: {
      type: String,
      required: true
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true
    }
  },
  { timestamps: true }
);

// prevent duplicate mapping
userRoleSchema.index(
  { userId: 1, tenantId: 1, clientId: 1 },
  { unique: true }
);

export default mongoose.model("UserRole", userRoleSchema);